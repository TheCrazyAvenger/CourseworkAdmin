import {Stacks} from '@/constants';
import {ProfileScreen} from '@/screens';
import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {HomeStack} from './ClassesStackNavigator';
import {InstructorsStack} from './InstructorsStackNavigator';
import {PartiesStack} from './PartiesStackNavigator';
import {StudentsStack} from './StudentsStackNavigator';

const Tab = createDrawerNavigator();

export const Drawer = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={Stacks.classes}
        options={{
          title: 'Классы',
        }}
        component={HomeStack}
      />
      <Tab.Screen
        name={Stacks.parties}
        options={{
          title: 'Вечеринки',
        }}
        component={PartiesStack}
      />
      <Tab.Screen
        name={Stacks.instructors}
        options={{
          title: 'Инструкторы',
        }}
        component={InstructorsStack}
      />
      <Tab.Screen
        name={Stacks.students}
        options={{
          title: 'Студенты',
        }}
        component={StudentsStack}
      />
      <Tab.Screen
        name={Stacks.profile}
        options={{
          title: 'Профиль',
        }}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};
