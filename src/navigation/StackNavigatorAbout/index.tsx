import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Exit from '../../icons/Exit';
import {StyleSheet} from 'react-native';
import allscreens, {ABOUT} from '../../values/screenValues';
import About from '../../screens/About';

const Stack = createNativeStackNavigator();

type Props = {};

const StackNavigatorAbout = ({}: Props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={allscreens[ABOUT]}
        component={About}
        options={{
          title: 'About',
          headerRight: () => <Exit style={styles.logoutBtnStyle} />,
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigatorAbout;

const styles = StyleSheet.create({
  logoutBtnStyle: {
    color: '#000',
    marginRight: 20,
  },
});
