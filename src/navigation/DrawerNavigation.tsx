import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import StackHome from './StackNavigatorHome';
import StackFavoritos from './StackNavigationFavoritos';
import allscreens, {FAVORITOSTACK, HOMESTACK} from '../values/screenValues';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name={allscreens[HOMESTACK]} component={StackHome} />
      <Drawer.Screen
        name={allscreens[FAVORITOSTACK]}
        component={StackFavoritos}
      />
    </Drawer.Navigator>
  );
}
