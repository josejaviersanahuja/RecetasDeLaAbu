import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import allscreens, {HOME, LOGIN} from '../../values/screenValues';
import Home from '../../screens/Home';
import Login from '../../screens/Login';
import LoginOrLogoutBtn from '../../components/LoginOrLogoutBtn';
import {NavigationProp, RouteProp} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

type Props = {
  navigation: NavigationProp<any, any>;
  route: RouteProp<any>;
};

const StackNavigatorHome = ({navigation}: Props) => {
  return (
    <Stack.Navigator initialRouteName={allscreens[HOME]}>
      <Stack.Screen
        name={allscreens[HOME]}
        component={Home}
        options={{
          title: '',
          headerRight: () => <LoginOrLogoutBtn navigation={navigation} />,
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
