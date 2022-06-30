import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Exit from '../../icons/Exit';
import {StyleSheet} from 'react-native';
import allscreens, {POLITICA_PRIVACIDAD} from '../../values/screenValues';
import PoliticaPrivacidad from '../../screens/PoliticaPrivacidad';

const Stack = createNativeStackNavigator();

type Props = {};

const StackNavigatorPoliticaPrivacidad = ({}: Props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={allscreens[POLITICA_PRIVACIDAD]}
        component={PoliticaPrivacidad}
        options={{
          title: 'Politica Privacidad',
          headerRight: () => <Exit style={styles.logoutBtnStyle} />,
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigatorPoliticaPrivacidad;

const styles = StyleSheet.create({
  logoutBtnStyle: {
    color: '#000',
    marginRight: 20,
  },
});
