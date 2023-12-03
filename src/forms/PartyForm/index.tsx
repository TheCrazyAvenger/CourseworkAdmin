import {DatePickerInput, SelectPartyTypeModal} from '@/components';
import {isErrorsExist} from '@/helpers';
import {selectPartyTypes} from '@/store/selectors';
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

export const PartyForm = ({
  onSubmit,
  initialValues,
  isEdit,
  loading,
  refetchTypes,
}: any) => {
  const partyTypes = useSelector(selectPartyTypes);

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

  const setDate = (item: Date) => {
    setFieldValue('date', item);
  };

  const setSelectedClassType = (item: string) => {
    setFieldValue('typeId', item);
  };

  const onChangeNumInput = (value: any, field: string) => {
    if (/^[0-9]+$/.test(value)) {
      const valueWithoutSpaces = value.replace(!/^[0-9]+$/g, '');
      setFieldValue(field, valueWithoutSpaces);
    }
  };

  const isContinueButtonDisabled = isErrorsExist(errors);

  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <TextInput
          mode="outlined"
          label={'Кол-во участников'}
          placeholder={'Введите кол-во участников'}
          onChangeText={(value: any) =>
            onChangeNumInput(value, 'numberOfAttendees')
          }
          onBlur={handleBlur('numberOfAttendees')}
          value={values.numberOfAttendees}
          style={styles.input}
          error={!!errors?.numberOfAttendees}
        />
        <TextInput
          mode="outlined"
          label={'Стоимост'}
          placeholder={'Введите стоимост'}
          onChangeText={(value: any) => onChangeNumInput(value, 'entranceFee')}
          onBlur={handleBlur('entranceFee')}
          value={values.entranceFee}
          style={styles.input}
          error={!!errors?.entranceFee}
        />
        {errors.entranceFee && (
          <HelperText type="error" style={styles.error}>
            {errors.entranceFee.toString()}
          </HelperText>
        )}
        <DatePickerInput
          label="Дата"
          placeholder="Введите дату"
          value={values.date.toLocaleDateString()}
          error={errors.date}
          selectValue={setDate}
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
              partyTypes?.find(type => type.type_id === +values.typeId)
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
      <SelectPartyTypeModal
        visible={selectTypeVisible}
        hideModal={hideTypes}
        refetch={refetchTypes}
        selectTypeId={setSelectedClassType}
      />
    </>
  );
};
