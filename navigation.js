import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import {COLORS} from './src/constant';
import RestaurantDetailScreen from './src/screens/RestaurantDetailScreen';
import CartScreen from './src/screens/CartScreen';

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          options={{statusBarTranslucent: true, statusBarColor: 'transparent'}}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{statusBarTranslucent: true, statusBarColor: 'transparent'}}
          name="RestaurantDetailScreen"
          component={RestaurantDetailScreen}
        />
        <Stack.Screen
          options={{statusBarTranslucent: true, statusBarColor: 'transparent'}}
          name="Cart"
          component={CartScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();
