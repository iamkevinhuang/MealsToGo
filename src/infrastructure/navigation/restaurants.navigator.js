import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';

const RestaurantStack = createStackNavigator();

// Screen
import RestaurantsScreen from '../../features/restaurants/screens/RestaurantsScreen';
import RestaurantDetailScreen from '../../features/restaurants/screens/RestaurantDetailScreen';

const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      headerMode="none"
      screenOptions={{ ...TransitionPresets.ModalPresentationIOS }}
    >
      <RestaurantStack.Screen
        name="Restaurants"
        component={RestaurantsScreen}
      />
      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetailScreen}
      />
    </RestaurantStack.Navigator>
  );
};

export default RestaurantsNavigator;
