/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Colors, NavigationService} from './src/config';
import {MainStack} from './src/stacks/MainStack';
import Toast, {
  BaseToast,
  ErrorToast,
  ToastProps,
} from 'react-native-toast-message';
import SplashScreen from 'react-native-splash-screen'

function App(): JSX.Element {
  const toastConfig = {
    info: (props: ToastProps) => (
      <BaseToast
        {...props}
        style={{
          borderLeftColor: Colors.Primary,
          width: '90%',
        }}
        text1Style={{
          fontSize: 14,
          fontWeight: '600',
        }}
        text2Style={{
          fontSize: 12,
        }}
        text1NumberOfLines={2}
      />
    ),
    success: (props: ToastProps) => (
      <BaseToast
        {...props}
        style={{borderLeftColor: 'green', width: '90%', borderLeftWidth: 6}}
        text1Style={{
          fontSize: 14,
          fontWeight: '600',
        }}
        text2Style={{
          fontSize: 12,
        }}
        text1NumberOfLines={2}
      />
    ),
    error: (props: ToastProps) => (
      <ErrorToast
        {...props}
        style={{borderLeftColor: 'red', width: '90%'}}
        text1Style={{
          fontSize: 13,
          fontWeight: '600',
        }}
        text2Style={{
          fontSize: 12,
        }}
      />
    ),
    tomatoToast: ({text1, props}: {text1: string; props: {uuid: string}}) => (
      <View
        style={{
          height: 60,
          width: '100%',
          backgroundColor: 'tomato',
          zIndex: 1000,
        }}>
        <Text>{text1}</Text>
        <Text>{props.uuid}</Text>
      </View>
    ),
  };

useEffect(()=>{
  SplashScreen.hide();
},[])

  return (
    <NavigationContainer
      ref={ref => NavigationService.setTopLevelNavigator(ref)}
      theme={{
        dark: true,
        colors: {
          background: Colors.Base,
          primary: '#000000',
          card: '#000000',
          text: '#000000',
          border: '#000000',
          notification: '#000000',
        },
      }}>
      {/* <StatusBar
        hidden={false}
        barStyle="light-content"
        backgroundColor={'#ffffff'}
      /> */}
      {/* <SafeAreaView style={styles.backgroundStyle}> */}
        <MainStack />
        <Toast />
      {/* </SafeAreaView> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
    backgroundColor: Colors.Base,
  },
});

export default App;
