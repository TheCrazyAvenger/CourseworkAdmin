import {noHeaderScreenOption, Screens} from '@/constants';
import {EditPartyScreen, PartiesScreen} from '@/screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

const Stack = createNativeStackNavigator();

export const PartiesStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={noHeaderScreenOption}
        name={Screens.parties}
        component={PartiesScreen}
      />
      <Stack.Screen
        options={noHeaderScreenOption}
        name={Screens.partyEdit}
        component={EditPartyScreen}
      />
    </Stack.Navigator>
  );
};
