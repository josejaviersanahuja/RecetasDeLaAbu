import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Exit from '../../icons/Exit';
import {StyleSheet} from 'react-native';
import allscreens, {HOME, LOGIN} from '../../values/screenValues';
import Home from '../../screens/Home';
import Login from '../../screens/Login';

const Stack = createNativeStackNavigator();

type Props = {};

const StackNavigatorHome = ({}: Props) => {
  return (
    <Stack.Navigator initialRouteName={allscreens[HOME]}>
      <Stack.Screen
        name={allscreens[HOME]}
        component={Home}
        options={{
          title: '',
          headerRight: () => <Exit style={styles.logoutBtnStyle} />,
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name={allscreens[LOGIN]}
        component={Login}
        options={{
          title: '',
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigatorHome;

const styles = StyleSheet.create({
  logoutBtnStyle: {
    color: '#000',
    marginRight: 20,
  },
});
