import * as Yup from 'yup';

export const validationSchema = Yup.object({
  firstName: Yup.string()
    .required('Обязательно')
    .max(64, 'Не больше 64 символов'),
  lastName: Yup.string()
    .required('Обязательно')
    .max(64, 'Не больше 64 символов'),
  address: Yup.string().required('Обязательно'),
  dateOfBirth: Yup.date().required('Обязательно'),
});
