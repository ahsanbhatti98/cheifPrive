import {RouteNames} from '../config';
import {
  ChangePassword,
  ForgotPassword,
  LoginScreen,
  OtpScreen,
  SignupScreen,
} from '../screens';

export const AuthStack = [
  {
    name: RouteNames.AuthRoutes.LoginScreen,
    component: LoginScreen,
    key: RouteNames.AuthRoutes.LoginScreen,
  },
  {
    name: RouteNames.AuthRoutes.SignUpScreen,
    component: SignupScreen,
    key: RouteNames.AuthRoutes.SignUpScreen,
  },
  {
    name: RouteNames.AuthRoutes.ForgotPasswordScreen,
    component: ForgotPassword,
    key: RouteNames.AuthRoutes.ForgotPasswordScreen,
  },
  {
    name: RouteNames.AuthRoutes.OtpScreen,
    component: OtpScreen,
    key: RouteNames.AuthRoutes.OtpScreen,
  },
  {
    name: RouteNames.AuthRoutes.ChangePasswrod,
    component: ChangePassword,
    key: RouteNames.AuthRoutes.ChangePasswrod,
  },
];
