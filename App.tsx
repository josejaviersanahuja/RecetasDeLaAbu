/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigation from './src/navigation/DrawerNavigation';
import {AuthProvider} from './src/context/UserContext';

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <DrawerNavigation />
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
