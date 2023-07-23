import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import {COLORS} from './src/constant';
import RestaurantDetailScreen from './src/screens/RestaurantDetailScreen';
import CartScreen from './src/screens/CartScreen';
import OrderPreparing from './src/screens/OrderPreparing';
import DeliveryScreen from './src/screens/DeliveryScreen';
import Welcome from './src/screens/Welcome';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="WelcomeScreen"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          options={{statusBarTranslucent: true, statusBarColor: 'transparent'}}
          name="WelcomeScreen"
          component={Welcome}
        />
        <Stack.Screen
          options={{statusBarTranslucent: true, statusBarColor: 'transparent'}}
          name="LoginScreen"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{statusBarTranslucent: true, statusBarColor: 'transparent'}}
          name="RegisterScreen"
          component={RegisterScreen}
        />
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
          options={{
            statusBarTranslucent: true,
            statusBarColor: 'transparent',
          }}
          name="Cart"
          component={CartScreen}
        />
        <Stack.Screen
          options={{
            presentation: 'fullScreenModal',
            statusBarTranslucent: true,
            statusBarColor: 'transparent',
          }}
          name="OrderPreparing"
          component={OrderPreparing}
        />
        <Stack.Screen
          options={{
            presentation: 'fullScreenModal',
            statusBarTranslucent: true,
            statusBarColor: 'transparent',
          }}
          name="DeliveryScreen"
          component={DeliveryScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
