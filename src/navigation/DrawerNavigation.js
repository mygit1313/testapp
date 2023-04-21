import {View, Text} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../screens/Home/Home';
import TabNavigation from './TabNavigation';
import History from '../screens/Home/History';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Drawer.Screen name="Home" component={TabNavigation} />
      <Drawer.Screen name="History" component={History} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
