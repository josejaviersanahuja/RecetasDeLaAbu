import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import allscreens, {ABOUT} from '../../values/screenValues';
import About from '../../screens/About';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import LoginOrLogoutBtn from '../../components/LoginOrLogoutBtn';

const Stack = createNativeStackNavigator();

type Props = {
  navigation: NavigationProp<any, any>;
  route: RouteProp<any>;
};

const StackNavigatorAbout = ({navigation}: Props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={allscreens[ABOUT]}
        component={About}
        options={{
          title: 'About',
          headerRight: () => <LoginOrLogoutBtn navigation={navigation} />,
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigatorAbout;
