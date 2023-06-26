import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Please enter your first name.'),
  lastName: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Please enter your last name.'),
  email: Yup.string()
    .email('Invalid email')
    .required('Please enter your email address.'),
  password: Yup.string()
    .min(8)
    .required('Please enter your password.')
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
      'Please enter a valid password that contains at least 8 characters, including one uppercase letter, one lowercase letter, one number, and one special character (e.g., Password@123).',
    ),
  mobile: Yup.string()
    .min(11)
    .max(12)
    .required()
    .matches(/^[0-9]+$/, 'Must be digits only'),
});

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Please enter your email address.'),
  password: Yup.string().required('Please enter your password.'),
});

const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Please enter your email address.'),
});

const ChangePasswordSchema = Yup.object().shape({
  password: Yup.string()
    .min(8)
    .required('Please enter your password.')
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
      'Please enter a valid password that contains at least 8 characters, including one uppercase letter, one lowercase letter, one number, and one special character (e.g., Password@123).',
    ),
  confirmPassword: Yup.string()
    .min(8, 'Confirm Password must be atleast 8 characters long.')
    .required('Please enter your confirm password.')
    .oneOf([Yup.ref('password')], 'Please enter same password.'),
});

export default {
  SignupSchema,
  LoginSchema,
  ForgotPasswordSchema,
  ChangePasswordSchema,
};
