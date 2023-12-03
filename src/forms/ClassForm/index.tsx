import {DropdownPicker, SelectClassTypeModal, TimePicker} from '@/components';
import {isErrorsExist} from '@/helpers';
import {weedays} from '@/mocks';
import {selectClassTypes} from '@/store/selectors';
import {useFormik} from 'formik';
import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native';
import {
  Button,
  HelperText,
  TextInput,
  TouchableRipple,
} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {styles} from './styles';
import {validationSchema} from './validation';

export const ClassForm = ({
  onSubmit,
  initialValues,
  isEdit,
  loading,
  refetchTypes,
}: any) => {
  const classTypes = useSelector(selectClassTypes);

  const buttonText = isEdit ? 'Изменить' : 'Добавить';

  const [selectTypeVisible, setSelectTypeVisible] = useState(false);
  const showTypes = () => {
    setSelectTypeVisible(true);
  };
  const hideTypes = () => {
    setSelectTypeVisible(false);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const {
    values,
    errors,
    handleSubmit,
    handleChange,
    handleBlur,
    setFieldValue,
    resetForm,
  } = formik;

  useEffect(() => {
    return () => {
      resetForm();
    };
  }, [resetForm]);

  const setWeekday = (item: string) => {
    setFieldValue('dayOfWeek', item);
  };

  const setStartTime = (item: string) => {
    setFieldValue('startTime', item);
  };

  const setEndTime = (item: string) => {
    setFieldValue('endTime', item);
  };

  const setSelectedClassType = (item: string) => {
    setFieldValue('typeId', item);
  };

  const isContinueButtonDisabled = isErrorsExist(errors);

  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <TextInput
          mode="outlined"
          label={'Название'}
          placeholder={'Введите название'}
          onChangeText={handleChange('className')}
          onBlur={handleBlur('className')}
          value={values.className}
          style={styles.input}
          error={!!errors?.className}
          onPressIn={() => console.log('11')}
        />
        {errors.className && (
          <HelperText type="error" style={styles.error}>
            {errors.className.toString()}
          </HelperText>
        )}
        <DropdownPicker
          label="День недели"
          placeholder="Введите день недели"
          values={weedays}
          value={values.dayOfWeek}
          selectValue={setWeekday}
          error={errors.dayOfWeek}
        />
        <TimePicker
          label="Время начала"
          placeholder="Введите время начала"
          value={values.startTime}
          error={errors.startTime}
          selectValue={setStartTime}
        />
        <TimePicker
          label="Время окончания"
          placeholder="Введите время окончания"
          value={values.endTime}
          error={errors.endTime}
          selectValue={setEndTime}
        />
        <TouchableRipple borderless style={styles.input} onPress={showTypes}>
          <TextInput
            editable={false}
            mode="outlined"
            label={'Тип'}
            placeholder={'Введите тип'}
            onChangeText={handleChange('className')}
            onBlur={handleBlur('className')}
            value={
              classTypes?.find(type => type.type_id === +values.typeId)
                ?.type_name || ''
            }
            error={!!errors?.typeId}
          />
        </TouchableRipple>
        {errors.typeId && (
          <HelperText type="error" style={styles.error}>
            {errors.typeId.toString()}
          </HelperText>
        )}

        <Button
          loading={loading}
          disabled={isContinueButtonDisabled || loading}
          style={styles.button}
          //@ts-ignore
          onPress={handleSubmit}
          mode="contained">
          {buttonText}
        </Button>
      </ScrollView>
      <SelectClassTypeModal
        visible={selectTypeVisible}
        hideModal={hideTypes}
        refetch={refetchTypes}
        selectTypeId={setSelectedClassType}
      />
    </>
  );
};
