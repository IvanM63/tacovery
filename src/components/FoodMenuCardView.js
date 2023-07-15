import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {SIZES, SHADOWS} from '../constant';
import * as Icon from 'react-native-feather';

export default function FoodMenuCardView() {
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
        <Text style={styles.textTitle}>Pizza Cheese</Text>
        <Text style={styles.textDesc}>Pizza With Cheese</Text>
        <Text style={styles.textPrice}>Rp 10000</Text>
      </View>
      {/* BUTTON TO ADD TO CART */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          flex: 2,
        }}>
        {/* MINUS BUTTON */}
        <TouchableOpacity>
          <Icon.Minus height={20} stroke={'gray'} />
        </TouchableOpacity>
        {/* AMOUNT  */}
        <Text tyle={styles.addMinButton}>0</Text>
        {/* PLUS BUTTON */}
        <TouchableOpacity>
          <Icon.Plus height={20} stroke={'gray'} />
        </TouchableOpacity>
      </View>
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
    backgroundColor: 'white',
    flexDirection: 'row',
    borderRadius: 15,
    marginVertical: 15,
    marginBottom: 5,
  },
});
