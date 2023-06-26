import React from 'react';

import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {AuthStack} from './AuthStack';
import {HomeStack} from './HomeStack';

export const MainStack = () => {
  const MainStack = createStackNavigator();
  //   const authorize = useSelector((state) => state?.user?.authorize);
  //   console.log("auth=====", authorize);
  const AuthScreens = AuthStack.map(stack => <MainStack.Screen {...stack} />);
  const HomeScreens = HomeStack.map(stack => <MainStack.Screen {...stack} />);

  return (
    <>
      <MainStack.Navigator
        // initialRouteName={'LoginScreen'}
        screenOptions={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}>
        {/* {authorize ? HomeScreens : AuthScreens} */}
        {AuthScreens}
      </MainStack.Navigator>
    </>
  );
};
