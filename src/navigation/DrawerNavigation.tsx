import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import StackAbout from './StackNavigatorAbout';
import StackPoliticaPrivacidad from './StackNavigatorPoliticaPrivacidad';
import allscreens, {
  ABOUTSTACK,
  POLITICA_PRIVACIDAD_STACK,
  TABSCREEN,
} from '../values/screenValues';
import TabNavigation from './TabNavigation';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name={allscreens[TABSCREEN]}
        component={TabNavigation}
        options={{
          title: 'Inicio',
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name={allscreens[POLITICA_PRIVACIDAD_STACK]}
        component={StackPoliticaPrivacidad}
        options={{
          title: 'Política de privacidad',
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name={allscreens[ABOUTSTACK]}
        component={StackAbout}
        options={{
          title: 'Acerca de',
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
}
