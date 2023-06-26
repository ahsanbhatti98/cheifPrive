import React, {FC, useState, Ref} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  TextInputProps,
  ImageProps,
  ViewStyle,
  ViewProps,
} from 'react-native';
import {CustomText} from '..';
import {Colors, Fonts, Metrix, Images, FontType} from '../../config';

type CustomInputProps = TextInputProps & {
  customStyle?: TextInputProps['style'];
  onEyePress?: () => void;
  hidepswdState?: boolean;
  eye?: boolean;
  isIcon?: boolean;
  iconImage?: ImageProps['source'];
  onBtnPress?: () => void;
  iconStyle?: ImageProps['style'];
  error?: string;
  touched?: boolean;
  heading: string;
  customContainerStyle?: ViewProps['style'];
  inputRef?:Ref<TextInput>
};

export const CustomInput: FC<CustomInputProps> = ({
  customStyle,
  onEyePress,
  hidepswdState,
  eye,
  isIcon,
  iconImage,
  onBtnPress,
  iconStyle = {},
  error,
  touched,
  heading,
  customContainerStyle,
  inputRef,
  ...rest
}) => {
  //   const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={customContainerStyle}>
      <CustomText.SmallGreyText
        customStyle={{
          marginBottom: Metrix.VerticalSize(2),
          marginTop: Metrix.VerticalSize(10),
        }}>
        {heading}
      </CustomText.SmallGreyText>
      <View style={styles.textContainer}>
        <TextInput
          // onFocus={() => setIsFocused(true)}
          // onBlur={() => setIsFocused(false)}
          selectionColor={Colors.Primary}
          ref={inputRef}
          style={[
            styles.textInput,
            // hidepswdState && {fontSize: FontType.FontExtraLarge},
            customStyle,
          ]}
          placeholderTextColor={Colors.SecondaryTextColor}
          {...rest}
        />
        {eye && (
          <TouchableOpacity
            activeOpacity={0.6}
            style={styles.eyeStyle}
            onPress={onEyePress}>
            {hidepswdState ? (
              <Image
                source={Images.EyeDisableIcon}
                style={{
                  width: '45%',
                  height: '45%',
                  tintColor: Colors.SecondaryTextColor,
                }}
                resizeMode="contain"
              />
            ) : (
              <Image
                source={Images.EyeAbleIcon}
                style={{
                  width: '45%',
                  height: '45%',
                  tintColor: Colors.SecondaryTextColor,
                }}
                resizeMode="contain"
              />
            )}
          </TouchableOpacity>
        )}
      </View>
      {touched && error ? (
        <CustomText.SmallText customStyle={{color: Colors.ErrorTextColor}}>
          {error}
        </CustomText.SmallText>
      ) : (
        <></>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    // borderWidth: 1,
    borderRadius: Metrix.VerticalSize(10),
    height: Metrix.VerticalSize(45),
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: Metrix.VerticalSize(10),
    backgroundColor: Colors.TextInputBaseColor,
    // borderColor: Colors.TextInputBorderColor,
    // marginHorizontal: Metrix.VerticalSize(10),
  },
  textInput: {
    color: Colors.PrimaryTextColor,
    fontSize: Metrix.customFontSize(13),
    paddingLeft: Metrix.HorizontalSize(10),
    fontFamily: Fonts['Regular'],
    height: '100%',
    width: '85%',
    // backgroundColor: Colors.TextInputBaseColor,
  },
  eyeStyle: {
    width: '15%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.TextInputBaseColor,
  },
});
