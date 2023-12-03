import {ScreenContainer} from '@/components';
import {setToken} from '@/store/slices';
import React, {useState} from 'react';
import {Button} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {styles} from './styles';

export const ProfileScreen = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const logout = async () => {
    setLoading(true);
    await dispatch(setToken(null));
    setLoading(false);
  };

  return (
    <ScreenContainer>
      <Button
        loading={loading}
        disabled={loading}
        style={styles.button}
        onPress={logout}
        mode="contained">
        Выйти из аккаунта
      </Button>
    </ScreenContainer>
  );
};
