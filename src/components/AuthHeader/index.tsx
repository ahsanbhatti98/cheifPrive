import React, {ReactNode} from 'react';
import {
  Image,
  ImageProps,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {BackHeader} from '../BackHeader';
import {
  CustomText,
  MainContainer,
  PrimaryButton,
  ScrollableContainer,
} from '..';
import {Colors, FontType, Images, Metrix} from '../../config';
import {PrimaryButtonProps} from '../PrimaryButton';

type AuthHeaderProps = Omit<PrimaryButtonProps, 'title'> & {
  heading: string;
  bottomText: string;
  children: ReactNode;
  bottomToucableText: string;
  onTextPress?: () => void;
};

type SocialIconsTypes = {
  id: string;
  title?: string;
  image: ImageProps['source'];
}[];

type ToucableTextCompnentPropTypes = Omit<
  AuthHeaderProps,
  'heading' | 'children'
>;

const socialIcons: SocialIconsTypes = [
  {id: '1', title: 'google', image: Images.GoogleIcon},
  {id: '2', title: 'facebook', image: Images.FacebookIcon},
  {id: '3', title: 'apple', image: Images.AppleIcon},
];

const SocialIconsComp = () => {
  return socialIcons.map(item => (
    <TouchableOpacity key={item?.id} activeOpacity={0.7}>
      <Image
        source={item?.image}
        resizeMode="contain"
        style={{
          width: Metrix.HorizontalSize(40),
          height: Metrix.VerticalSize(40),
        }}
      />
    </TouchableOpacity>
  ));
};

export const ToucableTextCompnent: React.FC<ToucableTextCompnentPropTypes> = ({
  bottomText,
  onTextPress,
  bottomToucableText,
}) => (
  <View style={styles.bottomTextStyles}>
    <CustomText.SmallText
      customStyle={{
        textAlign: 'center',
        marginTop: Metrix.VerticalSize(15),
      }}>
      {bottomText}
    </CustomText.SmallText>
    <TouchableOpacity activeOpacity={0.7} onPress={onTextPress}>
      <CustomText.SmallText
        customStyle={{
          color: Colors.TertiaryTextColor,
        }}>
        {' '}
        {bottomToucableText}
      </CustomText.SmallText>
    </TouchableOpacity>
  </View>
);

export const AuthHeader: React.FC<AuthHeaderProps> = ({
  heading,
  bottomText,
  bottomToucableText,
  children,
  disabled,
  onPress,
  onTextPress,
}) => {
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS =='ios'?"padding":'height'}
      keyboardVerticalOffset={20}>
      <ScrollableContainer
        customeStyle={{
          paddingHorizontal: Metrix.HorizontalSize(0),
        }}>
        <View
          style={[
            {
              // borderWidth: 1,
              marginBottom: Metrix.VerticalSize(20),
            },
            styles.paddingHorizontal,
          ]}>
          <Image
            source={Images.Logo}
            resizeMode="contain"
            style={styles.logoImage}
          />
          <CustomText.ExtraLargeBoldText customStyle={styles.headingText}>
            {heading}
          </CustomText.ExtraLargeBoldText>
        </View>
        <View style={styles.paddingHorizontal}>{children}</View>
        <View style={styles.paddingHorizontal}>
          <PrimaryButton
            title={heading}
            customStyles={{marginTop: Metrix.VerticalSize(20)}}
            disabled={disabled}
            onPress={onPress}
          />
          <ToucableTextCompnent
            bottomText={bottomText}
            bottomToucableText={bottomToucableText}
            onTextPress={onTextPress}
          />
          <TouchableOpacity
            style={{marginTop: Metrix.VerticalSize(15)}}
            activeOpacity={0.7}>
            <CustomText.LargeSemiBoldText
              customStyle={{
                color: Colors.Primary,
                textAlign: 'center',
                fontSize: FontType.FontRegular,
              }}>
              Continue as guest
            </CustomText.LargeSemiBoldText>
          </TouchableOpacity>
        </View>
        <View style={[styles.continueWithStyles]}>
          <View style={styles.horizontalLines}></View>
          <CustomText.MediumGreyText
            customStyle={{width: '40%', textAlign: 'center'}}>
            Continue with
          </CustomText.MediumGreyText>
          <View style={styles.horizontalLines}></View>
          <View />
        </View>
        <View style={styles.iconsMainContainer}>
          <SocialIconsComp />
        </View>
      </ScrollableContainer>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: Metrix.VerticalSize(40),
  },
  headingText: {
    marginBottom: Metrix.VerticalSize(10),
  },
  bottomTextStyles: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  paddingHorizontal: {
    paddingHorizontal: Metrix.HorizontalSize(30),
  },
  continueWithStyles: {
    // borderColor: 'white',
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    width: '100%',
    marginTop: Metrix.VerticalSize(30),
  },
  horizontalLines: {
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colors.WhiteTwentyOpacity,
    width: '30%',
    paddingHorizontal: Metrix.HorizontalSize(0),
    marginHorizontal: Metrix.HorizontalSize(0),
  },
  logoImage: {
    width: Metrix.HorizontalSize(100),
    height: Metrix.VerticalSize(100),
    alignSelf: 'center',
  },
  iconsMainContainer: {
    // borderWidth: 1,
    // borderColor: 'white',
    // height: Metrix.VerticalSize(100),
    height: Metrix.VerticalSize(50),
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: Metrix.VerticalSize(20),
    width: '50%',
    alignSelf: 'center',
  },
  iconContainer: {
    // borderWidth: 1,
    // borderColor: 'white',
    backgroundColor: Colors.PrimaryTextColor,
    justifyContent: 'center',
    height: '100%',
    width: Metrix.HorizontalSize(100),
    alignItems: 'center',
    borderRadius: Metrix.VerticalSize(10),
    marginHorizontal: Metrix.HorizontalSize(5),
  },
});
