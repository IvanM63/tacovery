import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';

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
import {useDispatch, useSelector} from 'react-redux';
import {Init} from './src/redux/UserActions';
const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        statusBarStyle: 'dark',
        statusBarColor: 'transparent',
      }}>
      <Stack.Screen
        options={{statusBarTranslucent: true}}
        name="LoginScreen"
        component={LoginScreen}
      />
      <Stack.Screen
        options={{statusBarTranslucent: true}}
        name="RegisterScreen"
        component={RegisterScreen}
      />
    </Stack.Navigator>
  );
}

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        statusBarStyle: 'dark',
        statusBarColor: 'transparent',
      }}>
      {/* <Stack.Screen
        options={{statusBarTranslucent: true}}
        name="WelcomeScreen"
        component={Welcome}
      /> */}

      <Stack.Screen
        options={{statusBarTranslucent: true}}
        name="Home"
        component={HomeScreen}
      />
      <Stack.Screen
        options={{statusBarTranslucent: true}}
        name="RestaurantDetailScreen"
        component={RestaurantDetailScreen}
      />
      <Stack.Screen
        options={{
          statusBarTranslucent: true,
        }}
        name="Cart"
        component={CartScreen}
      />
      <Stack.Screen
        options={{
          presentation: 'fullScreenModal',
          statusBarTranslucent: true,
        }}
        name="OrderPreparing"
        component={OrderPreparing}
      />
      <Stack.Screen
        options={{
          presentation: 'fullScreenModal',
          statusBarTranslucent: true,
        }}
        name="DeliveryScreen"
        component={DeliveryScreen}
      />
    </Stack.Navigator>
  );
}

function RootNavigation() {
  const token = useSelector(state => state.UserReducers.authToken);
  const user = useSelector(state => state.UserReducers.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Init());
  });

  console.log('user', user);
  return (
    <NavigationContainer>
      {token === null ? <AuthStack /> : <MyStack />}
    </NavigationContainer>
  );
}

export default function Navigation() {
  return <RootNavigation />;
}
