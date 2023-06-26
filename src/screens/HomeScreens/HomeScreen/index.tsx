import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

type HomeScreenProps = {};

export const HomeScreen = ({}: HomeScreenProps) => {
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};

interface HomeScreenStyles {}
const styles = StyleSheet.create<HomeScreenStyles>({});
