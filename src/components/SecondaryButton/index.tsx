import React, {FC, ReactNode} from 'react';
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  StyleSheet,
  Image,
  TouchableOpacityProps,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {Metrix, Colors, Fonts, Images} from '../../config';
import {CustomText} from '..';

type PrimaryButtonProps = TouchableOpacityProps & {
  title: string;
  isLoading?: boolean;
  disabled?: boolean;
  width?: number | string;
  color?: string;
  textColor?: string;
  customStyles?: StyleProp<ViewStyle>;
};

export const SecondaryButton: FC<PrimaryButtonProps> = ({
  title,
  onPress,
  isLoading,
  disabled,
  width = '100%',
  color = Colors.Secondary,
  textColor = '#ffffff',
  customStyles,
  ...rest
}) => (
  <TouchableOpacity
    onPress={onPress}
    activeOpacity={0.8}
    style={[
      styles.buttonContainer,
      {
        backgroundColor: disabled ? 'rgba(171, 26, 78, 0.7)' : color,
        width: width,
      },
      customStyles,
    ]}
    disabled={disabled || isLoading}
    {...rest}>
    {isLoading ? (
      <ActivityIndicator color={textColor} />
    ) : (
      <CustomText.MediumBoldText customStyle={{color: textColor}}>
        {title}
      </CustomText.MediumBoldText>
      // <Text style={{ color: textColor }}>{title}</Text>
    )}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  buttonContainer: {
    height: Metrix.VerticalSize(50),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Metrix.VerticalSize(50),
    marginVertical: Metrix.VerticalSize(10),
    borderColor: Colors.TextInputBorderColor,
    borderWidth: 1,

    // ...Metrix.createShadow(),
  },
  // titleText:{
  //   fontFamily: Fonts['Futura-Medium'],
  //   fontSize: Metrix.customFontSize(16),
  //   color: Colors.Primary,
  // }
});
