import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';

import React from 'react';
import {COLORS, SIZES, Burger, featured} from '../constant';
import * as Icon from 'react-native-feather';
import Category from '../components/category';
import FeaturedRow from '../components/FeaturedRow';
import {Image} from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView>
      <View style={{flexDirection: 'column'}}>
        {/* GREEN BACKGROUND UPPER */}
        <View
          style={{
            backgroundColor: COLORS.primary,
            borderBottomStartRadius: 40,
            borderBottomEndRadius: 40,
            height: 115,
            width: '100%',
            position: 'absolute',
          }}>
          <Image
            source={require('../assets/images/FoodDoodle.png')}
            style={{
              borderBottomRightRadius: 40,
              borderBottomLeftRadius: 40,
              height: 115,
              width: '100%',
              position: 'absolute',
              opacity: 0.2,
            }}
          />
        </View>
        {/* <Image source={require('../assets/images/FoodDoodle.png')} /> */}
        {/* SEARCH BAR */}
        <View style={stylesSearch.searchInputWrapper}>
          {/* ICON COMPONENT */}
          <Icon.Search stroke={'gray'} style={stylesSearch.iconSearch} />
          <TextInput style={stylesSearch.searchInput} placeholder="Search" />
        </View>
        {/* LOCATION VIEW */}
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 30,
            marginVertical: 30,
            alignItems: 'center',
          }}>
          {/* MAP ICON */}
          <Icon.MapPin
            height={'28'}
            width={'28'}
            stroke={'black'}
            style={{
              marginHorizontal: 10,
            }}
          />
          {/* ADDRESS CONTAINER */}
          <View
            style={{
              flexDirection: 'column',
              flex: 1,
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                color: 'black',
                fontSize: SIZES.medium,
              }}>
              Home
            </Text>
            <Text style={{color: 'black', fontSize: SIZES.medium}}>
              242 ST Marks Eve, Finland
            </Text>
          </View>
          {/* SETTING */}
          <Icon.Sliders
            height={'28'}
            width={'28'}
            stroke={'black'}
            style={{
              marginHorizontal: 10,
            }}
          />
        </View>
        {/* CATEGORY VIEW */}
        <Category />
        {/* POPULAR RESTAURANT */}
        <View
          showsHorizontalScrollIndicator={false}
          style={stylesFeatured.container}>
          {[featured, featured, featured].map((item, index) => {
            return (
              <FeaturedRow
                key={index}
                title={item.title}
                restaurants={item.restaurants}
                description={item.restaurants}
              />
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
}

const stylesFeatured = StyleSheet.create({
  container: {marginHorizontal: 30},
});

const stylesSearch = StyleSheet.create({
  searchInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    color: 'white',
    backgroundColor: 'white',
    borderRadius: 15,
    marginVertical: 30,
    marginHorizontal: 30,
    height: 55,
  },
  searchInput: {
    flex: 1,
  },
  iconSearch: {
    marginHorizontal: 13,
    flex: 1,
  },
  magnifyIcon: {
    alignItems: 'center',
  },
  searchResultItemContainer: {
    backgroundColor: 'white',
    color: 'white',
    borderRadius: 25,
    position: 'absolute',
    width: '100%',
    top: '90%',
    zIndex: 1,
  },
  searchResultItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    padding: 15,
  },
});

const stylesText = StyleSheet.create({
  textLocation: {
    color: 'white',
    fontSize: 20,
  },
  textDays: {
    color: 'white',
    fontSize: 50,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  textTemperature: {
    color: 'white',
    fontSize: 60,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  textWeatherStatus: {
    color: 'white',
    fontSize: 18,
  },
  textWeatherStatusNominal: {
    color: 'white',
    fontSize: 13,
  },
});
