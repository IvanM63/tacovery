import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Image} from 'react-native';
import AddMinButton from './AddMinButton';
import {SIZES} from '../constant';
import * as Icon from 'react-native-feather';

export default function CartListCardView({item}) {
  return (
    <View style={styles.cartItemListContainer}>
      {/* IMAGE  */}
      <Image
        style={{height: 80, width: 70, borderRadius: 15, flex: 1.5, margin: 10}}
        source={require('../assets/images/pizzaMenu.jpg')}
      />
      {/* Desc Item Container */}
      <View style={styles.descItemContainer}>
        <Text style={styles.textTitle}>{item.name}</Text>
        <View style={{width: 110, marginHorizontal: -5, marginTop: 5}}>
          <AddMinButton item={item} />
        </View>
      </View>
      {/* RIght COntainer */}
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          alignItems: 'flex-end',
          paddingHorizontal: 10,
        }}>
        {/* X Button */}
        <TouchableOpacity style={styles.xButton}>
          <Icon.X height={20} strokeWidth={3} color={'#BD05E6'} />
        </TouchableOpacity>

        {/* Price */}
        <Text style={styles.textPrice}>{item.price}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  xButton: {
    paddingTop: 10,
    color: '#BD05E6',
    fontWeight: 'bold',
    flex: 2,
  },
  textTitle: {
    color: 'black',
    fontSize: SIZES.medium,
  },
  textPrice: {
    color: 'black',
    fontSize: SIZES.medium,
    flex: 1.3,
    fontWeight: '500',
  },
  descItemContainer: {
    justifyContent: 'center',
    marginHorizontal: 5,
    flex: 2.5,
  },
  cartItemListContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginHorizontal: 30,
    borderRadius: 15,
    marginBottom: 15,
  },
});
