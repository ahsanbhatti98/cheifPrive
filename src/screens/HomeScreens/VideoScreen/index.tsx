import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

type VideoScreenProps = {};

export const VideoScreen = ({}: VideoScreenProps) => {
  return (
    <View>
      <Text>VideoScreen</Text>
    </View>
  );
};

interface VideoScreenStyles {}
const styles = StyleSheet.create<VideoScreenStyles>({});
