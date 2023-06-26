import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {FontType, Images, Metrix, NavigationService} from '../../config';
import {CustomText} from '..';

type BackHeaderProps = {
  heading?: string;
  subHeading?: string;
  customeStyle?: StyleProp<ViewStyle>;
  btnImage?: ImageSourcePropType;
  backArrow?: boolean;
  backFunction?: () => void;
};

export const BackHeader: React.FC<BackHeaderProps> = ({
  heading = '',
  subHeading = '',
  customeStyle,
  btnImage = Images.BackBtn,
  backArrow = true,
  backFunction = () => NavigationService.goBack(),
}) => {
  return (
    <View style={[styles.container, customeStyle]}>
      {backArrow ? (
        <TouchableOpacity style={styles.backButton} onPress={backFunction}>
          <Image
            source={btnImage}
            resizeMode="contain"
            style={styles.backImage}
          />
        </TouchableOpacity>
      ) : (
        <View style={styles.backButton} />
      )}
      <View style={styles.headingContainer}>
        <CustomText.ExtraLargeBoldText>{heading}</CustomText.ExtraLargeBoldText>
        <CustomText.MediumGreyText
          customStyle={{
            fontSize: FontType.FontSmall,
            marginTop: Metrix.VerticalSize(5),
          }}>
          {subHeading}
        </CustomText.MediumGreyText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingTop: Metrix.VerticalSize(10),
    paddingBottom: Metrix.VerticalSize(20),
  },
  backButton: {
    // width: "25%",
    // borderWidth: 1,
    // borderColor:'white'
  },
  backImage: {
    width: Metrix.HorizontalSize(20),
    height: Metrix.VerticalSize(20),
  },
  headingContainer: {
    marginLeft: Metrix.HorizontalSize(20),
  },
});
