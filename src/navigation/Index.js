import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigation from './DrawerNavigation';
import {useSelector} from 'react-redux';

const Index = () => {
  const [token, settoken] = useState('');

  return (
    <NavigationContainer>
      <DrawerNavigation />
    </NavigationContainer>
  );
};

export default Index;
