import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from '../pages/Main';
import UserScreen from '../pages/User';

const Routes = () => {
  const RouterStack = createStackNavigator();

  return (
    <RouterStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#1e3854',
        },
        headerTintColor: '#FFF',
        headerBackTitleVisible: false,
      }}
    >
      <RouterStack.Screen name="Home" component={MainScreen} />
      <RouterStack.Screen name="User" component={UserScreen} />
    </RouterStack.Navigator>
  );
};

export default Routes;
