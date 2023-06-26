import React, {ReactNode} from 'react';
import {Text, StyleSheet, StyleProp, TextStyle, TextProps} from 'react-native';
import {Metrix, Colors, Fonts, FontType, Images} from '../../config';
import {normalizeFont} from '../../config/metrix';

type CustomTextProps = TextProps & {
  children: ReactNode;
  customStyle?: StyleProp<TextStyle>;
};

const ExtraLargeBoldText = ({
  children,
  customStyle,
  ...rest
}: CustomTextProps) => {
  return (
    <Text style={[styles.ExtraLargeBoldText, customStyle]} {...rest}>
      {children}
    </Text>
  );
};

const LargeBoldText = ({children, customStyle, ...rest}: CustomTextProps) => {
  return (
    <Text style={[styles.BoldText, customStyle]} {...rest}>
      {children}
    </Text>
  );
};

const LargeSemiBoldText = ({
  children,
  customStyle,
  ...rest
}: CustomTextProps) => {
  return (
    <Text style={[styles.SemiBold, customStyle]} {...rest}>
      {children}
    </Text>
  );
};

const MediumLargeText = ({children, customStyle, ...rest}: CustomTextProps) => {
  return (
    <Text style={[styles.MediumLargeText, customStyle]} {...rest}>
      {children}
    </Text>
  );
};

const MediumBoldText = ({
  children,
  customStyle,
  ...rest
}: CustomTextProps) => {
  return (
    <Text style={[styles.MediumBoldText, customStyle]} {...rest}>
      {children}
    </Text>
  );
};

const MediumText = ({children, customStyle, ...rest}: CustomTextProps) => {
  return (
    <Text style={[styles.MediumText, customStyle]} {...rest}>
      {children}
    </Text>
  );
};

const MediumGreyText = ({children, customStyle, ...rest}: CustomTextProps) => {
  return (
    <Text style={[styles.MediumGreyText, customStyle]} {...rest}>
      {children}
    </Text>
  );
};

const RegularText = ({
  children,
  customStyle,
  ...rest
}: CustomTextProps) => {
  return (
    <Text style={[styles.RegularText, customStyle]} {...rest}>
      {children}
    </Text>
  );
};

const RegularGreyText = ({children, customStyle, ...rest}: CustomTextProps) => {
  return (
    <Text style={[styles.RegularGreyText, customStyle]} {...rest}>
      {children}
    </Text>
  );
};

const SmallGreyText = ({children, customStyle, ...rest}: CustomTextProps) => {
  return (
    <Text style={[styles.SmallGreyText, customStyle]} {...rest}>
      {children}
    </Text>
  );
};

const SmallText = ({children, customStyle, ...rest}: CustomTextProps) => {
  return (
    <Text style={[styles.SmallText, customStyle]} {...rest}>
      {children}
    </Text>
  );
};

export default {
  ExtraLargeBoldText,
  LargeBoldText,
  LargeSemiBoldText,
  MediumLargeText,
  MediumBoldText,
  MediumText,
  MediumGreyText,
  RegularText,
  RegularGreyText,
  SmallGreyText,
  SmallText,
};

const styles = StyleSheet.create({
  ExtraLargeBoldText: {
    fontFamily: Fonts['Bold'],
    fontSize: FontType.FontExtraLarge,
    color: Colors.PrimaryTextColor,
  },
  BoldText: {
    fontFamily: Fonts['Bold'],
    fontSize: FontType.FontLarge,
    color: Colors.PrimaryTextColor,
  },
  SemiBold: {
    fontFamily: Fonts['Semi-Bold'],
    fontSize: FontType.FontMedium,
    color: Colors.SecondaryTextColor,
  },
  MediumLargeText: {
    fontFamily: Fonts['Medium'],
    fontSize: FontType.FontMedium,
    color: Colors.PrimaryTextColor,
  },
  MediumBoldText: {
    fontFamily: Fonts['Bold'],
    fontSize: FontType.FontMedium,
    color: Colors.SecondaryTextColor,
  },
  MediumText: {
    fontFamily: Fonts['Medium'],
    fontSize: FontType.FontMedium,
    color: Colors.PrimaryTextColor,
  },
  MediumGreyText: {
    fontFamily: Fonts['Medium'],
    fontSize: FontType.FontRegular,
    color: Colors.SecondaryTextColor,
  },
  RegularText: {
    fontFamily: Fonts['Regular'],
    fontSize: FontType.FontRegular,
    color: Colors.PrimaryTextColor,
  },
  RegularGreyText: {
    fontFamily: Fonts['Regular'],
    fontSize: FontType.FontRegular,
    color: Colors.SecondaryTextColor,
  },

  SmallGreyText: {
    fontFamily: Fonts['Regular'],
    fontSize: FontType.FontSmall,
    color: Colors.SecondaryTextColor,
  },
  SmallText: {
    fontFamily: Fonts['Regular'],
    fontSize: FontType.FontSmall,
    color: Colors.PrimaryTextColor,
  },
});
