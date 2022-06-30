import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../screens/Home';
import PoliticaPrivacidad from '../screens/PoliticaPrivacidad';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="PoliticaPrivacidad" component={PoliticaPrivacidad} />
    </Drawer.Navigator>
  );
}
