import {useLoginMutation} from '@/api';
import {Header, ScreenContainer, Typography} from '@/components';
import {LoginForm} from '@/forms';
import React, {useEffect, useState} from 'react';
import {Alert, ScrollView, View} from 'react-native';
import {useTheme} from 'react-native-paper';
import {styles} from './styles';

export const LoginScreen = () => {
  const {colors} = useTheme();

  const [login, {isLoading, isError}] = useLoginMutation({});
  const [loading, setLoading] = useState(false);

  const initialValues = {
    email: '',
    password: '',
  };

  useEffect(() => {
    if (isError) {
      Alert.alert('Ошибка', 'Неверные логин и/или пароль');
    }
  }, [isError]);

  const onSubmit = async (values: any) => {
    try {
      setLoading(true);
      await login(values);
      setLoading(false);
    } catch (e) {
      console.error(e);
      setLoading(false);
    }
  };

  return (
    <ScreenContainer>
      <ScrollView
        contentContainerStyle={styles.container}
        style={{backgroundColor: colors.primary}}>
        <Header
          title="Admin Kursach"
          pv={100}
          textAlign="center"
          variant="displayLarge"
        />
        <View style={[styles.content, {backgroundColor: colors.background}]}>
          <Typography variant="displaySmall" textAlign={'center'}>
            Вход
          </Typography>
          <LoginForm
            initialValues={initialValues}
            onSubmit={onSubmit}
            loading={isLoading || loading}
          />
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};
