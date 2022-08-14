import * as Yup from 'yup';

const errorMessages = {
  required: 'This field is required',
  email: 'Please use a valid email',
};

// eslint-disable-next-line import/prefer-default-export
export const yupUserOptions = {
  email: Yup.string().required(errorMessages.required).email(errorMessages.email),
  password: Yup.string().required(errorMessages.required),
};
