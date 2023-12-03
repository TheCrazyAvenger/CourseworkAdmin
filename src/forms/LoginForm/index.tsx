import {isErrorsExist} from '@/helpers';
import {useFormik} from 'formik';
import React, {useEffect} from 'react';
import {View} from 'react-native';
import {Button, HelperText, TextInput} from 'react-native-paper';
import {styles} from './styles';
import {validationSchema} from './validation';

export const LoginForm = ({onSubmit, initialValues, loading, error}: any) => {
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

  const onChangeInput = (value: any, field: string) => {
    const valueWithoutSpaces = value.replace(/\s/g, '');
    setFieldValue(field, valueWithoutSpaces);
  };

  const isContinueButtonDisabled = isErrorsExist(errors);

  return (
    <View style={styles.container}>
      <TextInput
        mode="outlined"
        left={<TextInput.Icon icon="email-outline" />}
        label={'Почта'}
        placeholder={'Введите почту'}
        onChangeText={handleChange('email')}
        onBlur={handleBlur('email')}
        value={values.email}
        keyboardType="email-address"
        style={styles.input}
        error={!!errors?.email}
      />
      {errors.email && (
        <HelperText type="error" style={styles.error}>
          {errors.email.toString()}
        </HelperText>
      )}

      <TextInput
        mode="outlined"
        left={<TextInput.Icon icon="email-outline" />}
        label={'Пароль'}
        placeholder={'Введите пароль'}
        onChangeText={(value: any) => onChangeInput(value, 'password')}
        onBlur={handleBlur('password')}
        value={values.password}
        keyboardType="email-address"
        error={!!errors?.password}
      />
      {errors.password && (
        <HelperText type="error">{errors.password.toString()}</HelperText>
      )}
      <Button
        loading={loading}
        disabled={isContinueButtonDisabled || loading}
        style={styles.button}
        onPress={handleSubmit}
        mode="contained">
        Войти
      </Button>
    </View>
  );
};
