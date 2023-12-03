import {AppDarkTheme, AppDefaultTheme} from '@/constants';
import {selectToken} from '@/store/selectors';
import {NavigationContainer} from '@react-navigation/native';
import React, {useMemo} from 'react';
import {PaperProvider, useTheme} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {Drawer} from './ApplicationStackNavigator';
import {AuthenticationStackNavigator} from './AuthenticationStackNavigator';

export const RootNavigator = () => {
  const {dark} = useTheme();
  const token = useSelector(selectToken);
  const theme = useMemo(() => (dark ? AppDarkTheme : AppDefaultTheme), [dark]);

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        {token ? <Drawer /> : <AuthenticationStackNavigator />}
      </NavigationContainer>
    </PaperProvider>
  );
};
