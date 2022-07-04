import {Button, SafeAreaView, Text} from 'react-native';
import React from 'react';
import {
  handleFacebookLogIn,
  handleGoogleLogIn,
  logout,
} from '../../firebase/auth';

export default function Home() {
  return (
    <SafeAreaView>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Button
        title="Login con Facebook"
        onPress={() => handleFacebookLogIn()}
      />
      <Button title="Login con Google" onPress={() => handleGoogleLogIn()} />
      <Button title="Logout" onPress={() => logout()} />
    </SafeAreaView>
  );
}
