import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Exit from '../../icons/Exit';
import {StyleSheet} from 'react-native';
import allscreens, {FAVORITOS} from '../../values/screenValues';
import Favoritos from '../../screens/Favoritos';

const Stack = createNativeStackNavigator();

type Props = {};

const StackNavigatorFavoritos = ({}: Props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={allscreens[FAVORITOS]}
        component={Favoritos}
        options={{
          title: 'Favoritos',
          headerRight: () => <Exit style={styles.logoutBtnStyle} />,
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigatorFavoritos;

const styles = StyleSheet.create({
  logoutBtnStyle: {
    color: '#000',
    marginRight: 20,
  },
});
