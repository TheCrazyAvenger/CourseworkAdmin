import {noHeaderScreenOption, Screens} from '@/constants';
import {EditStudentScreen, StudentsScreen} from '@/screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

const Stack = createNativeStackNavigator();

export const StudentsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={noHeaderScreenOption}
        name={Screens.students}
        component={StudentsScreen}
      />
      <Stack.Screen
        options={noHeaderScreenOption}
        name={Screens.editStudent}
        component={EditStudentScreen}
      />
    </Stack.Navigator>
  );
};
