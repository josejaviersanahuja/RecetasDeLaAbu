import {Button, SafeAreaView, StyleSheet, Text} from 'react-native';
import React, {useEffect} from 'react';
import {GoogleSigninButton} from '@react-native-google-signin/google-signin';
import {handleFacebookLogIn, handleGoogleLogIn} from '../../firebase/auth';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import allScreens, {HOME} from '../../values/screenValues';
import {useAuth} from '../../context/UserContext';

type Props = {
  navigation: NavigationProp<any, any>;
  route: RouteProp<any>;
};

export default function Login({navigation}: Props) {
  const {auth} = useAuth();
  useEffect(() => {
    auth && navigation.navigate(allScreens[HOME]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth]);

  return (
    <SafeAreaView style={styles.layout}>
      <Text>Login</Text>
      <Button
        onPress={handleFacebookLogIn}
        title="Entra con Facebook"
        color="#4267B2"
      />
      <GoogleSigninButton onPress={handleGoogleLogIn} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
