import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import allscreens, {FAVORITOS} from '../../values/screenValues';
import Favoritos from '../../screens/Favoritos';
import LoginOrLogoutBtn from '../../components/LoginOrLogoutBtn';
import {NavigationProp, RouteProp} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

type Props = {
  navigation: NavigationProp<any, any>;
  route: RouteProp<any>;
};

const StackNavigatorFavoritos = ({navigation}: Props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={allscreens[FAVORITOS]}
        component={Favoritos}
        options={{
          title: '',
          headerRight: () => <LoginOrLogoutBtn navigation={navigation} />,
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigatorFavoritos;
