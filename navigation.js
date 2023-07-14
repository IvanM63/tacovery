import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import {COLORS} from './src/constant';
import RestaurantDetailScreen from './src/screens/RestaurantDetailScreen';

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          options={{statusBarColor: COLORS.primary}}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{statusBarColor: COLORS.primary}}
          name="RestaurantDetailScreen"
          component={RestaurantDetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();
