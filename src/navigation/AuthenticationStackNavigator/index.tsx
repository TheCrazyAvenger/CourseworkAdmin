import {noHeaderScreenOption, Screens} from '@/constants';
import {LoginScreen} from '@/screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

const Stack = createNativeStackNavigator();

export const AuthenticationStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={noHeaderScreenOption}>
      <Stack.Screen name={Screens.login} component={LoginScreen} />
    </Stack.Navigator>
  );
};
