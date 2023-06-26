import {
  Image,
  ImageProps,
  ImageStyle,
  StyleSheet,
  Text,
  TextInput,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {
  BackHeader,
  CustomInput,
  CustomText,
  MainContainer,
  PrimaryButton,
} from '../../../components';
import {Formik} from 'formik';
import Schema from '../../../formik';
import {FontType, Images, Metrix} from '../../../config';

type ChangePasswordProps = {};

export const ChangePassword = ({}: ChangePasswordProps) => {
  const [hidePassword, setHidePassword] = useState(true);
  const [hideConfirmPassword, setHideConfirmPassword] = useState(true);
  const [passwordChanged, setPasswordChanged] = useState(false);

  let passwordRef = useRef<TextInput>(null!);

  return (
    <Formik
      initialValues={{
        password: '',
        confirmPassword: '',
      }}
      onSubmit={value => {
        console.log('------data', value);
        setPasswordChanged(true);
      }}
      validationSchema={Schema.ChangePasswordSchema}>
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
          {!passwordChanged ? (
            <View style={{flex: 1}}>
              <BackHeader
                heading="New Password"
                backArrow={false}
                subHeading="Set your new password!"
              />
              <CustomInput
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
                  setHidePassword(prev => !prev);
                }}
                heading="Password"
                returnKeyType="next"
                onSubmitEditing={() => passwordRef.current.focus()}
              />
              <CustomInput
                placeholder="Enter Confirm Password"
                value={values?.confirmPassword}
                onChangeText={handleChange('confirmPassword')}
                onBlur={() => setFieldTouched('confirmPassword')}
                error={errors?.confirmPassword}
                touched={touched?.confirmPassword}
                secureTextEntry={hideConfirmPassword}
                hidepswdState={hideConfirmPassword}
                eye
                onEyePress={() => {
                  setHideConfirmPassword(prev => !prev);
                }}
                heading="Confirm Password"
                returnKeyType="done"
                inputRef={passwordRef}
              />
              <PrimaryButton
                title={'NEXT'}
                customStyles={{marginTop: Metrix.VerticalSize(20)}}
                disabled={!isValid}
                onPress={handleSubmit}
              />
            </View>
          ) : (
            <View style={styles.container}>
              <Image
                source={Images.PasswordPlaceHolder}
                resizeMode="contain"
                style={styles.imageStyle}
              />
              <CustomText.MediumGreyText customStyle={styles.textStyle}>
                Your password has been changed successfully
              </CustomText.MediumGreyText>
            </View>
          )}
        </MainContainer>
      )}
    </Formik>
  );
};

interface ChangePasswordStyles {
  imageStyle: ImageStyle;
  container: ViewStyle;
  textStyle: TextStyle;
}
const styles = StyleSheet.create<ChangePasswordStyles>({
  imageStyle: {
    width: '80%',
    height: Metrix.VerticalSize(200),
  },
  container: {
    // flex: 1,
    alignItems: 'center',
    // borderWidth: 1,
    justifyContent: 'center',
    marginTop: Metrix.VerticalSize(100),
  },
  textStyle: {
    fontSize: FontType.FontLarge,
    textAlign: 'center',
    lineHeight: Metrix.VerticalSize(20),
    marginTop: Metrix.VerticalSize(20),
  },
});
