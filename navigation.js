import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/pages/Home/HomeScreen';
import {COLORS} from './src/constant';
import RestaurantDetailScreen from './src/pages/RestaurantDetail/RestaurantDetailScreen';
import CartScreen from './src/pages/Cart/CartScreen';
import OrderPreparing from './src/pages/OrderPreparing';
import DeliveryScreen from './src/pages/Delivery/DeliveryScreen';
import Welcome from './src/pages/Welcome';
import LoginScreen from './src/pages/Auth/LoginScreen';
import RegisterScreen from './src/pages/Auth/RegisterScreen';
import {useDispatch, useSelector} from 'react-redux';
import {Init} from './src/redux/User/UserActions';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProfileScreen from './src/pages/Profile/ProfileScreen';
import SearchScreen from './src/pages/Search/SearchScreen';
import {Home, Search, Archive, User, Tag} from 'react-native-feather';
import OrderScreen from './src/pages/Order/OrderScreen';
import Icon, {Icons} from './src/components/Icons';

const Stack = createNativeStackNavigator();
const HomeNav = createNativeStackNavigator();
const Profile = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabArr = [
  {
    route: 'Home',
    type: Icons.Feather,
    icon: Home,
    label: 'Home',
    component: HomeScreen,
  },
  {
    route: 'Search',
    type: Icons.Feather,
    icon: Search,
    label: 'Search',
    component: SearchScreen,
  },
  {
    route: 'Order',
    type: Icons.Feather,
    icon: Archive,
    label: 'Order',
    component: OrderScreen,
  },
  {
    route: 'Profile',
    type: Icons.Feather,
    icon: User,
    label: 'Profile',
    component: ProfileScreen,
  },
];

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

function WelcomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        statusBarStyle: 'dark',
        statusBarColor: 'transparent',
      }}>
      <Stack.Screen
        options={{statusBarTranslucent: true}}
        name="Welcome"
        component={Welcome}
      />
    </Stack.Navigator>
  );
}

function HomeTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 90,
        },
      }}>
      {TabArr.map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            name={item.route}
            component={item.component}
            options={{
              tabBarIcon: ({focused}) => (
                <View
                  style={{
                    borderRadius: 10,
                    padding: 12,
                    elevation: focused ? 3 : null,
                    shadowColor: '#000',
                    backgroundColor: focused ? COLORS.primary : null,
                  }}>
                  <Icon
                    type={item.icon}
                    name={item.icon}
                    color={focused ? COLORS.white : COLORS.gray}
                    size={2}
                  />
                </View>
              ),
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
}

function HomeStackScreen() {
  return (
    <HomeNav.Navigator
      screenOptions={{
        headerShown: false,
        statusBarStyle: 'dark',
        statusBarColor: 'transparent',
      }}>
      <HomeNav.Screen
        options={{statusBarTranslucent: true}}
        name="HomeScreen"
        component={HomeTab}
      />
      <HomeNav.Screen
        options={{statusBarTranslucent: true}}
        name="RestaurantDetailScreen"
        component={RestaurantDetailScreen}
      />
      <HomeNav.Screen
        options={{
          statusBarTranslucent: true,
        }}
        name="Cart"
        component={CartScreen}
      />
      <HomeNav.Screen
        options={{
          presentation: 'fullScreenModal',
          statusBarTranslucent: true,
        }}
        name="OrderPreparing"
        component={OrderPreparing}
      />
      <HomeNav.Screen
        options={{
          presentation: 'fullScreenModal',
          statusBarTranslucent: true,
        }}
        name="DeliveryScreen"
        component={DeliveryScreen}
      />
    </HomeNav.Navigator>
  );
}

function RootNavigation() {
  const [isReady, setIsReady] = useState(true);
  const token = useSelector(state => state.UserReducers.authToken);
  const user = useSelector(state => state.UserReducers.user);
  const dispatch = useDispatch();

  const init = async () => {
    await dispatch(Init());
    setTimeout(() => {
      setIsReady(false);
    }, 1000);
  };

  useEffect(() => {
    init();
  });

  return (
    <NavigationContainer>
      {isReady === true ? (
        <WelcomeStack />
      ) : token === null ? (
        <AuthStack />
      ) : (
        <HomeStackScreen />
      )}
    </NavigationContainer>
  );
}

export default function Navigation() {
  return <RootNavigation />;
}
