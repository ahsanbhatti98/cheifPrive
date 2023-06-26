import {
  Alert,
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {
  AuthHeader,
  CustomInput,
  CustomText,
  MainContainer,
  PrimaryButton,
} from '../../../components';
import {Formik} from 'formik';
import {
  Colors,
  FontType,
  Images,
  Metrix,
  NavigationService,
  RouteNames,
} from '../../../config';
import Schema from '../../../formik';
import {DropdownMenu} from '../../../components/DropdownMenu';

type SignupScreenProps = {};

const dropdownData = [
  {title: 'Facebook', id: '1'},
  {title: 'Instagram', id: '2'},
  {title: 'Friend', id: '3'},
  {title: 'Others', id: '4'},
];
export const SignupScreen = ({}: SignupScreenProps) => {
  const [hidePassword, setHidePassword] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  const [ourFind, setOurFind] = useState('Select');

  let lastNameRef = useRef<TextInput>(null!);
  let emailRef = useRef<TextInput>(null!);
  let passwordRef = useRef<TextInput>(null!);
  let mobileRef = useRef<TextInput>(null!);

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        mobile: '',
      }}
      onSubmit={values => console.log('------data', values)}
      validationSchema={Schema.SignupSchema}>
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
          heading="Sign Up"
          bottomText="Already have an account?"
          disabled={!isValid}
          onPress={handleSubmit}
          onTextPress={() =>
            NavigationService.navigate(RouteNames.AuthRoutes.LoginScreen)
          }
          bottomToucableText="Log In">
          <View style={styles.nameViewConainer}>
            <CustomInput
              placeholder="Enter First Name"
              value={values?.firstName}
              onChangeText={handleChange('firstName')}
              onBlur={() => setFieldTouched('firstName')}
              error={errors?.firstName}
              touched={touched?.firstName}
              heading="First Name"
              returnKeyType={'next'}
              onSubmitEditing={() => lastNameRef.current.focus()}
              customContainerStyle={{width: '45%'}}
            />
            <CustomInput
              placeholder="Enter Last Name"
              value={values?.lastName}
              onChangeText={handleChange('lastName')}
              onBlur={() => setFieldTouched('lastName')}
              error={errors?.lastName}
              touched={touched?.lastName}
              heading="Last Name"
              customContainerStyle={{width: '45%'}}
              returnKeyType={'next'}
              inputRef={lastNameRef}
              onSubmitEditing={() => emailRef.current.focus()}
            />
          </View>
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
            returnKeyType={'next'}
            inputRef={emailRef}
            onSubmitEditing={() => passwordRef.current.focus()}
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
            returnKeyType={'next'}
            inputRef={passwordRef}
            onSubmitEditing={() => mobileRef.current.focus()}
          />
          <CustomInput
            placeholder="Enter Contact Number"
            value={values?.mobile}
            onChangeText={handleChange('mobile')}
            onBlur={() => setFieldTouched('mobile')}
            error={errors?.mobile}
            touched={touched?.mobile}
            heading="Contact Number"
            returnKeyType={'done'}
            keyboardType="numeric"
            inputRef={mobileRef}
          />
          <DropdownMenu
            selected={ourFind}
            myFunc={params => {
              setOurFind(params);
            }}
            heading="How did you find us?"
            arrow={Images.ArrowDown}
            items={dropdownData}
            customContainerStyles={{width: '100%'}}
          />

          <View
            style={{flexDirection: 'row', marginLeft: Metrix.VerticalSize(5)}}>
            <TouchableOpacity
              onPress={() => setIsChecked(prev => !prev)}
              activeOpacity={0.4}
              style={[
                styles.checkContainer,
                {
                  backgroundColor: isChecked ? Colors.Primary : Colors.Base,
                },
              ]}>
              {isChecked ? (
                <Image
                  source={Images.CheckIcon}
                  style={{width: '90%', height: '80%'}}
                />
              ) : (
                <></>
              )}
            </TouchableOpacity>
            <CustomText.SmallText>
              Keep me updated with special offers, exciting products and news
            </CustomText.SmallText>
          </View>
        </AuthHeader>
      )}
    </Formik>
  );
};

interface SignupScreenStyles {
  nameViewConainer: ViewStyle;
  checkContainer: ViewStyle;
}
const styles = StyleSheet.create<SignupScreenStyles>({
  nameViewConainer: {
    // borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  checkContainer: {
    borderWidth: StyleSheet.hairlineWidth,
    width: Metrix.HorizontalSize(15),
    height: Metrix.VerticalSize(15),
    marginRight: Metrix.HorizontalSize(10),
    borderRadius: Metrix.VerticalSize(3),
    borderColor: Colors.PrimaryTextColor,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:'center'
  },
});
