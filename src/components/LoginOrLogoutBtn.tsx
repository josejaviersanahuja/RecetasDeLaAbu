import {Text, StyleSheet} from 'react-native';
import React from 'react';
import {useAuth} from '../context/UserContext';
import Exit from '../icons/Exit';
import {NavigationProp} from '@react-navigation/native';
import screenValues, {LOGIN} from '../values/screenValues';
import {logout} from '../firebase/auth';

type Props = {
  navigation: NavigationProp<any, any>;
};

export default function LoginOrLogoutBtn({navigation}: Props) {
  const {auth} = useAuth();

  if (auth === null) {
    return (
      <Text
        style={styles.textColor}
        onPress={() => navigation.navigate(screenValues[LOGIN])}>
        Login
      </Text>
    );
  }
  return <Exit style={styles.logoutBtnStyle} onPress={logout} />;
}

const styles = StyleSheet.create({
  logoutBtnStyle: {
    color: '#000',
    marginRight: 20,
  },
  textColor: {
    color: 'black',
  },
});
