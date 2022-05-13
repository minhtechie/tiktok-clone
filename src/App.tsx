import React from 'react';
import TabNavigator from './TabNavigator';
import {NavigationContainer} from '@react-navigation/native';

export default () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};
