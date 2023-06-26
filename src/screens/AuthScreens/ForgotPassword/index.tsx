import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  BackHeader,
  CustomInput,
  MainContainer,
  PrimaryButton,
} from '../../../components';
import {Formik} from 'formik';
import Schema from '../../../formik';
import {Metrix, NavigationService, RouteNames} from '../../../config';

type ForgotPasswordProps = {};

export const ForgotPassword = ({}: ForgotPasswordProps) => {
  return (
    <Formik
      initialValues={{
        email: '',
      }}
      onSubmit={value => {
        NavigationService.navigate(RouteNames.AuthRoutes.OtpScreen, {
          email: value?.email,
        });
        console.log('------data', value);
      }}
      validationSchema={Schema.ForgotPasswordSchema}>
      {({
        values,
        errors,
        touched,
        handleChange,
        setFieldTouched,
        isValid,
        handleSubmit,
      }) => (
        <MainContainer>
          <BackHeader heading="Forgot Password" />
          <CustomInput
            placeholder="Enter Email"
            value={values?.email}
            onChangeText={handleChange('email')}
            onBlur={() => setFieldTouched('email')}
            error={errors?.email}
            touched={touched?.email}
            autoCapitalize="none"
            heading="Email"
            keyboardType='email-address'
          />
          <PrimaryButton
            title={'NEXT'}
            customStyles={{marginTop: Metrix.VerticalSize(20)}}
            disabled={!isValid}
            onPress={handleSubmit}
          />
        </MainContainer>
      )}
    </Formik>
  );
};

interface ForgotPasswordStyles {}
const styles = StyleSheet.create<ForgotPasswordStyles>({});
