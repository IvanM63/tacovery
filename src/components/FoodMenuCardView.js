import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {SIZES, SHADOWS} from '../constant';
import * as Icon from 'react-native-feather';
import AddMinButton from './AddMinButton';

export default function FoodMenuCardView({item}) {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/pizza.jpg')}
        style={{height: 90, width: 90, borderRadius: 15, flex: 1.6}}
      />
      {/* DESC FOOD */}
      <View
        style={{
          flexDirection: 'column',
          margin: 10,
          justifyContent: 'center',
          flex: 2,
        }}>
        <Text style={styles.textTitle}>{item.name}</Text>
        <Text style={styles.textDesc}>{item.description}</Text>
        <Text style={styles.textPrice}>Rp{item.price}</Text>
      </View>
      {/* BUTTON TO ADD TO CART */}
      <AddMinButton item={item} flex={1.5} />
    </View>
  );
}

const styles = StyleSheet.create({
  addMinButton: {color: 'black', fontSize: SIZES.medium},
  textTitle: {
    color: 'black',
    fontSize: SIZES.medium,
    fontWeight: '500',
  },
  textDesc: {
    color: 'black',
    fontSize: SIZES.small,
  },
  textPrice: {
    color: 'black',
    fontSize: SIZES.medium,
    fontWeight: '500',
    marginTop: 8,
  },
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
    borderRadius: 15,
    marginVertical: 15,
    marginBottom: 5,
  },
});
