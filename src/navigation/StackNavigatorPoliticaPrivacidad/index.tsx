import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import allscreens, {POLITICA_PRIVACIDAD} from '../../values/screenValues';
import PoliticaPrivacidad from '../../screens/PoliticaPrivacidad';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import LoginOrLogoutBtn from '../../components/LoginOrLogoutBtn';

const Stack = createNativeStackNavigator();

type Props = {
  navigation: NavigationProp<any, any>;
  route: RouteProp<any>;
};

const StackNavigatorPoliticaPrivacidad = ({navigation}: Props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={allscreens[POLITICA_PRIVACIDAD]}
        component={PoliticaPrivacidad}
        options={{
          title: 'Politica Privacidad',
          headerRight: () => <LoginOrLogoutBtn navigation={navigation} />,
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigatorPoliticaPrivacidad;
