import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Heart from '../icons/Heart';
import AccountIcon from '../icons/AccountIcon';
import allscreens, {FAVORITOSTACK, HOMESTACK} from '../values/screenValues';
import StackNavigatorHome from './StackNavigatorHome';
import StackNavigatorFavoritos from './StackNavigationFavoritos';
// import DrawerNavigation from './DrawerNavigation';

const Tab = createBottomTabNavigator();
type Props = {};

const TabNavigation = ({}: Props) => {
  return (
    <>
      <Tab.Navigator initialRouteName={allscreens[HOMESTACK]}>
        <Tab.Screen
          name={allscreens[HOMESTACK]}
          component={StackNavigatorHome}
          options={{
            tabBarLabel: 'HOME TAB',
            tabBarIcon: () => <AccountIcon color={'#000'} />,
            headerShown: false,
          }}
        />
        <Tab.Screen
          name={allscreens[FAVORITOSTACK]}
          component={StackNavigatorFavoritos}
          options={{
            tabBarLabel: 'Favoritos',
            tabBarIcon: () => <Heart color={'red'} />,
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default TabNavigation;
