import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../constant';
import {useNavigation} from '@react-navigation/native';
import CartScreen from '../screens/CartScreen';
import {useSelector} from 'react-redux';
import {selectCartItems, selectCartTotal} from '../slices/CartSlice';

export default function CartComp() {
  const navigation = useNavigation();
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  if (!cartItems.length) {
    return;
  }
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Cart')}
      activeOpacity={0.5}
      style={styles.container}>
      <Text style={styles.textTotal}>{cartItems.length}</Text>
      <Text style={styles.textItem}>Items</Text>
      <Text style={styles.textCart}>View Cart</Text>
      <Text style={styles.textPrice}>Rp{cartTotal}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  textTotal: {
    flex: 1,
    color: 'white',
    fontSize: SIZES.large,
    fontWeight: '500',
    textAlign: 'right',
  },
  textCart: {
    flex: 2,
    color: 'white',
    fontSize: SIZES.large,
    fontWeight: '700',
  },
  textPrice: {
    flex: 2.5,
    color: 'white',
    fontSize: SIZES.large,
    fontWeight: '500',
  },
  textItem: {
    flex: 2,
    color: 'white',
    fontSize: SIZES.small,
    opacity: 0.8,
    padding: 5,
  },
  container: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.primaryDarker,
    height: 80,
    width: '100%',
    zIndex: 1,
    top: 705,
  },
});
