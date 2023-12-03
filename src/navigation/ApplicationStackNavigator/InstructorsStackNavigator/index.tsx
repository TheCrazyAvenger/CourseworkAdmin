import {noHeaderScreenOption, Screens} from '@/constants';
import {EditInstructorScreen, InstructorsScreen} from '@/screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

const Stack = createNativeStackNavigator();

export const InstructorsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={noHeaderScreenOption}
        name={Screens.instructors}
        component={InstructorsScreen}
      />
      <Stack.Screen
        options={noHeaderScreenOption}
        name={Screens.editInstructor}
        component={EditInstructorScreen}
      />
    </Stack.Navigator>
  );
};
