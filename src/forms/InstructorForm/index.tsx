import {DropdownPicker, TimePicker} from '@/components';
import {isErrorsExist} from '@/helpers';
import {instructorsTypes, weedays} from '@/mocks';
import {useFormik} from 'formik';
import React, {useEffect} from 'react';
import {ScrollView} from 'react-native';
import {Button, HelperText, TextInput} from 'react-native-paper';
import {styles} from './styles';
import {validationSchema} from './validation';

export const InstructorForm = ({
  onSubmit,
  initialValues,
  isEdit,
  loading,
}: any) => {
  const buttonText = isEdit ? 'Изменить' : 'Добавить';

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

  const setType = (item: string) => {
    setFieldValue('type', item);
  };

  const setStartTime = (item: string) => {
    setFieldValue('startTime', item);
  };

  const setEndTime = (item: string) => {
    setFieldValue('endTime', item);
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
          label={'Имя'}
          placeholder={'Введите имя'}
          onChangeText={handleChange('firstName')}
          onBlur={handleBlur('firstName')}
          value={values.firstName}
          style={styles.input}
          error={!!errors?.firstName}
        />
        {errors.firstName && (
          <HelperText type="error" style={styles.error}>
            {errors.firstName.toString()}
          </HelperText>
        )}
        <TextInput
          mode="outlined"
          label={'Фамилия'}
          placeholder={'Введите фамилию'}
          onChangeText={handleChange('lastName')}
          onBlur={handleBlur('lastName')}
          value={values.lastName}
          style={styles.input}
          error={!!errors?.lastName}
        />
        {errors.lastName && (
          <HelperText type="error" style={styles.error}>
            {errors.lastName.toString()}
          </HelperText>
        )}

        <DropdownPicker
          label="Тип"
          placeholder="Введите тип"
          values={instructorsTypes}
          value={values.type}
          selectValue={setType}
          error={errors.type}
        />
        <TextInput
          mode="outlined"
          label={'Зарплата'}
          placeholder={'Введите зарплату'}
          onChangeText={(value: any) => onChangeNumInput(value, 'fixedSalary')}
          onBlur={handleBlur('fixedSalary')}
          value={values.fixedSalary}
          style={styles.input}
          error={!!errors?.fixedSalary}
        />
        {errors.fixedSalary && (
          <HelperText type="error" style={styles.error}>
            {errors.fixedSalary.toString()}
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
    </>
  );
};
