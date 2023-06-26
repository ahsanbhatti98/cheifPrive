import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {
  Colors,
  FontType,
  Metrix,
  NavigationService,
  RouteNames,
} from '../../../config';
import {
  AuthHeader,
  BackHeader,
  CustomInput,
  CustomText,
  MainContainer,
  PrimaryButton,
  SecondaryButton,
} from '../../../components';
import {Formik} from 'formik';
import Schema from '../../../formik';

type LoginScreenProps = {};

export const LoginScreen = ({}: LoginScreenProps) => {
  const [hidePassword, setHidePassword] = useState(true);
  let passwordRef = useRef<TextInput>(null!);

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={values => console.log('dada------', values)}
      validationSchema={Schema.LoginSchema}>
      {({
        values,
        errors,
        touched,
        handleChange,
        setFieldTouched,
        isValid,
        handleSubmit,
      }) => (
        <AuthHeader
          heading="Log In"
          bottomText="Don’t have an account?"
          disabled={!isValid}
          onPress={handleSubmit}
          bottomToucableText="Sign Up"
          onTextPress={() =>
            NavigationService.navigate(RouteNames.AuthRoutes.SignUpScreen)
          }>
          <CustomInput
            placeholder="Enter Email"
            value={values?.email}
            onChangeText={handleChange('email')}
            onBlur={() => setFieldTouched('email')}
            error={errors?.email}
            touched={touched?.email}
            autoCapitalize="none"
            heading="Email"
            keyboardType="email-address"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
          />
          <CustomInput
            heading="Password"
            placeholder="Enter Password"
            value={values?.password}
            onChangeText={handleChange('password')}
            onBlur={() => setFieldTouched('password')}
            error={errors?.password}
            touched={touched?.password}
            secureTextEntry={hidePassword}
            hidepswdState={hidePassword}
            eye
            onEyePress={() => {
              if (values?.password) {
                setHidePassword(prev => !prev);
              }
            }}
            returnKeyType='done'
            inputRef={passwordRef}
          />
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() =>
              NavigationService.navigate(
                RouteNames.AuthRoutes.ForgotPasswordScreen,
              )
            }>
            <CustomText.MediumText
              customStyle={{
                fontSize: FontType.FontSmall,
                color: Colors.TertiaryTextColor,
                textAlign: 'right',
              }}>
              Forgot password?
            </CustomText.MediumText>
          </TouchableOpacity>
        </AuthHeader>
      )}
    </Formik>
  );
};

interface LoginScreenStyles {}
const styles = StyleSheet.create<LoginScreenStyles>({});
