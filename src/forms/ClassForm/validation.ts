import * as Yup from 'yup';

export const validationSchema = Yup.object({
  className: Yup.string()
    .required('Обязательно')
    .max(64, 'Не больше 64 символов'),
  dayOfWeek: Yup.string().required('Обязательно'),
  startTime: Yup.string().required('Обязательно'),
  endTime: Yup.string().required('Обязательно'),
  typeId: Yup.string().required('Обязательно'),
});
