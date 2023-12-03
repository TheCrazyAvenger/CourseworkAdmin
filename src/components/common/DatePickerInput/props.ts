import {FormikErrors} from 'formik';

export type Props = {
  value: string;
  selectValue: (...args: any) => any;
  error:
    | string
    | string[]
    | FormikErrors<any>
    | FormikErrors<any>[]
    | undefined;
  label: string;
  placeholder: string;
};
