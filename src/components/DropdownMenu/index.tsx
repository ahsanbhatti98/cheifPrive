import React, { useState, useRef } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet,
} from "react-native";
import { Menu, MenuItem, Position } from "react-native-enhanced-popup-menu";
import { Colors, Images, Metrix } from "../../config";
import { CustomText } from "..";

type DropdownMenuItem = {
  id: string;
  title: string;
  list?: any[];
  image?: string;
};

type DropdownMenuProps = {
  items: DropdownMenuItem[];
  selected: string;
  selectedImage?: string;
  myFunc: (title: string, id: string, list?: any[], image?: string) => void;
  heading?: string;
  customContainerStyles?: any;
  customMainContainerStyle?: any;
  customTextStyle?: any;
  customInnerContainerStyle?: any;
  customMenuStyles?: any;
  arrow?: any;
  openDropdown?: boolean;
  alerFunc?: () => void;
};

export const DropdownMenu: React.FC<DropdownMenuProps> = ({
  items,
  selected,
  selectedImage = "",
  myFunc,
  heading,
  customContainerStyles,
  customMainContainerStyle,
  customTextStyle,
  customInnerContainerStyle,
  customMenuStyles,
  arrow = Images.ArrowDown,
  openDropdown = true,
  alerFunc,
}) => {
  const textRef = useRef<TouchableOpacity>(null);
  const [menuRef, setMenuRef] = useState<Menu | null>(null);

  return (
    <View
      style={[
        {
          marginBottom: Metrix.VerticalSize(30),
          marginTop: Metrix.VerticalSize(10),
        },
        customMainContainerStyle,
      ]}
    >
      {heading && (
        <CustomText.SmallGreyText
          customStyle={{
            marginBottom: Metrix.VerticalSize(10),
          }}
        >
          {heading}
        </CustomText.SmallGreyText>
      )}
      <View style={[styles.container, customContainerStyles]}>
        <TouchableOpacity
          onPress={() => {
            if (openDropdown) {
              menuRef?.show(textRef.current, Position.BOTTOM_CENTER);
            } else {
              alerFunc?.();
            }
          }}
          ref={textRef}
          style={[
            {
              flex: 1,
              height: "100%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            },
            customInnerContainerStyle,
          ]}
        >
          <View
            style={{
              height: Metrix.VerticalSize(45),
              alignSelf: "center",
              alignItems: "center",
              width: "80%",
              flexDirection: "row",
            }}
          >
            {selectedImage !== "" && (
              <Image
                source={{ uri: selectedImage }}
                style={{
                  width: Metrix.HorizontalSize(30),
                  height: Metrix.VerticalSize(30),
                  marginRight: Metrix.HorizontalSize(6),
                }}
                resizeMode="contain"
              />
            )}
            <CustomText.SmallText customStyle={[customTextStyle]}>
              {selected}
            </CustomText.SmallText>
          </View>

          <Image
            source={arrow}
            resizeMode="contain"
            style={{
              width: Metrix.HorizontalSize(14),
              height: Metrix.VerticalSize(14),
            }}
          />
        </TouchableOpacity>
        <Menu
          ref={(ref) => setMenuRef(ref)}
          style={[
            {
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "white",
              padding: Metrix.HorizontalSize(4),
              maxHeight: Metrix.VerticalSize(200),
              width:'80%'
            },
            customMenuStyles,
          ]}
        >
          <FlatList
            showsVerticalScrollIndicator={false}
            data={items}
            renderItem={({ item, index }) => {
              return (
                <MenuItem
                  style={{
                    alignItems: "flex-start",
                    width: "100%",
                    height: Metrix.VerticalSize(50),
                    justifyContent: "center",
                    paddingLeft: Metrix.HorizontalSize(10),
                  }}
                  onPress={() => {
                    menuRef?.hide();
                    myFunc(item?.title, item?.id, item?.list, item?.image);
                  }}
                >
                  <TouchableOpacity
                    style={{
                      height: Metrix.VerticalSize(45),
                      alignSelf: "center",
                      alignItems: "center",
                      width: "100%",
                      flexDirection: "row",
                    }}
                    onPress={() => {
                      menuRef?.hide();
                      myFunc(item?.title, item?.id, item?.list, item?.image);
                    }}
                  >
                    {item?.image && (
                      <Image
                        source={{ uri: item?.image }}
                        style={{
                          width: Metrix.HorizontalSize(30),
                          height: Metrix.VerticalSize(30),
                          marginRight: Metrix.HorizontalSize(6),
                        }}
                        resizeMode="contain"
                      />
                    )}
                    <CustomText.SmallGreyText>
                      {item.title}
                    </CustomText.SmallGreyText>
                  </TouchableOpacity>
                </MenuItem>
              );
            }}
            keyExtractor={(item) => item.id}
          />
        </Menu>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // borderWidth: StyleSheet.hairlineWidth,
    padding: Metrix.VerticalSize(10),
    paddingLeft: Metrix.HorizontalSize(20),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // borderColor: "#6F747D4D",
    borderRadius: Metrix.VerticalSize(10),
    width: "100%",
    height: Metrix.VerticalSize(45),
    backgroundColor: Colors.TextInputBaseColor,

  },
});
