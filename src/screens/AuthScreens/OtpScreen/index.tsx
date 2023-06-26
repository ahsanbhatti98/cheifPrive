import {Image, StyleSheet, Text, TextInputProps, View} from 'react-native';
import React, {useState} from 'react';
import {CustomText, MainContainer, PrimaryButton} from '../../../components';
import {
  Colors,
  FontType,
  Images,
  Metrix,
  NavigationService,
  RouteNames,
} from '../../../config';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {ToucableTextCompnent} from '../../../components/AuthHeader';
import {showToast} from '../../../config/utills';

type OtpScreenProps = {
  route: {
    params: {
      email: string;
    };
  };
};

export const OtpScreen = ({route}: OtpScreenProps) => {
  const {email} = route?.params;
  const [code, setCode] = useState('');
  console.log('-----------===email', email);

  const handleOtp = () => {
    if (!code && !code.length) {
      showToast('Code is required.');
    } else if (code.length < 4) {
      showToast('Please enter valid code.');
    } else {
      NavigationService.navigate(RouteNames.AuthRoutes.ChangePasswrod);
    }
  };

  return (
    <MainContainer>
      <View style={styles.container}>
        <Image
          source={Images.MailIcon}
          resizeMode="contain"
          style={styles.imageStyle}
        />
        <CustomText.MediumGreyText customStyle={styles.textStyle}>
          Code has been sent to registered email {email}
        </CustomText.MediumGreyText>
        <CustomText.SmallText>Please enter 4 digit code</CustomText.SmallText>
        <OTPInputView
          style={{width: '80%', height: Metrix.VerticalSize(50)}}
          pinCount={4}
          code={code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
          onCodeChanged={code => setCode(code)}
          codeInputFieldStyle={styles.underlineStyleBase}
          codeInputHighlightStyle={styles.underlineStyleHighLighted}
          // secureTextEntry
          selectionColor={Colors.Primary}
        />
        <ToucableTextCompnent
          bottomText={'Didn’t receive code?'}
          bottomToucableText={'Resend'}
          onTextPress={() => console.log('Resend Code')}
        />
        <PrimaryButton title={'Verify'} onPress={handleOtp} />
      </View>
    </MainContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '60%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  imageStyle: {
    width: Metrix.HorizontalSize(100),
    height: Metrix.VerticalSize(90),
  },
  textStyle: {
    textAlign: 'center',
    lineHeight: Metrix.VerticalSize(20),
  },
  underlineStyleBase: {
    width: Metrix.HorizontalSize(40),
    height: Metrix.VerticalSize(45),
    borderWidth: 0,
    borderBottomWidth: Metrix.HorizontalSize(2),
    borderColor: '#DFDFDF',
    fontSize: FontType.FontExtraLarge,
    color: Colors.Primary,
    padding:0
  },
  underlineStyleHighLighted: {
    borderColor: Colors.Primary,
  },
});
