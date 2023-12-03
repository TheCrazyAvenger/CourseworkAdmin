import * as Yup from 'yup';

export const validationSchema = Yup.object({
  date: Yup.date().required('Обязательно'),
  numberOfAttendees: Yup.string().required('Обязательно'),
  entranceFee: Yup.string().required('Обязательно'),
  typeId: Yup.string().required('Обязательно'),
});
