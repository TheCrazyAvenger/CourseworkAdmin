import {noHeaderScreenOption, Screens} from '@/constants';
import {ClassesScreen, EditClassScreen} from '@/screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

const Stack = createNativeStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={noHeaderScreenOption}
        name={Screens.classes}
        component={ClassesScreen}
      />
      <Stack.Screen
        options={noHeaderScreenOption}
        name={Screens.editClass}
        component={EditClassScreen}
      />
    </Stack.Navigator>
  );
};
