import * as Yup from 'yup';

export const validationSchema = Yup.object({
  email: Yup.string()
    .required('Почта обязательна')
    .email('Введите праильный тип почты')
    .max(64, 'Не больше 64 символов'),
  password: Yup.string().required('Пароль обязателен'),
});
