import * as Yup from 'yup';

export const validationSchema = Yup.object({
  firstName: Yup.string()
    .required('Обязательно')
    .max(64, 'Не больше 64 символов'),
  lastName: Yup.string()
    .required('Обязательно')
    .max(64, 'Не больше 64 символов'),
  type: Yup.string().required('Обязательно'),
  fixedSalary: Yup.string()
    .required('Обязательно')
    .max(64, 'Не больше 64 символов'),
  dayOfWeek: Yup.string().required('Обязательно'),
  startTime: Yup.string().required('Обязательно'),
  endTime: Yup.string().required('Обязательно'),
});
