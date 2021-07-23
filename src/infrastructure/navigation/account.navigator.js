import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

// Screen
import AccountScreen from '../../features/account/screens/AccountScreen';
import LoginScreen from '../../features/account/screens/LoginScreen';
import RegisterScreen from '../../features/account/screens/RegisterScreen';

const AccountNavigator = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Main" component={AccountScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default AccountNavigator;
