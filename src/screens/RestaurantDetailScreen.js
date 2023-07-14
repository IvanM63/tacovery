import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';

export default function RestaurantDetailScreen() {
  const {params} = useRoute();
  let item = params;
  console.log('restaurant: ', item);
  return (
    <View>
      <Text>RestaurantDetailScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
