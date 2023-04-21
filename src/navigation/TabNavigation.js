import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Home from '../screens/Home/Home';
import StackNavigation from './StackNavigation';
import History from '../screens/Home/History';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let iconName2;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'History') {
            iconName = focused ? 'history' : 'history';
          }

          // You can return any component that you like here!
          return (
            <View style={{flexDirection: 'row', marginTop: 5}}>
              <FontAwesome name={iconName} size={size} color={color} />
              <MaterialIcons name={iconName2} size={size} color={color} />
            </View>
          );
        },
        tabBarActiveTintColor: '#363A5A',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Home" component={StackNavigation} />
      <Tab.Screen name="History" component={History} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
