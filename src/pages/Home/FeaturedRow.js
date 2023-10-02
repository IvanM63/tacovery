import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SIZES} from '../../constant';
import RestaurantCardView from './RestaurantCardView';

export default function FeaturedRow({title, description, restaurants}) {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>{title}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {restaurants.map((restaurant, index) => {
          return <RestaurantCardView key={index} item={restaurant} />;
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: -30,
    marginVertical: 10,
  },
  textTitle: {
    fontWeight: '500',
    color: 'black',
    fontSize: SIZES.large,
    marginHorizontal: 30,
  },
});
