import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import * as Icon from 'react-native-feather';
import {COLORS} from '../constant';
import {useDispatch, useSelector} from 'react-redux';
import {
  addToCart,
  removeFromCart,
  selectCartItemsById,
} from '../slices/CartSlice';

export default function AddMinButton({item}) {
  const dispatch = useDispatch();

  const totalItems = useSelector(state => selectCartItemsById(state, item.id));

  const handleIncrease = () => {
    dispatch(addToCart(item));
  };
  const handleDecrease = () => {
    dispatch(removeFromCart({id: item.id}));
  };
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flex: 3,
        backgroundColor: '#F8F8FA',
        borderRadius: 15,
        height: 40,
        marginHorizontal: 5,
      }}>
      {/* MINUS BUTTON */}
      <TouchableOpacity onPress={handleDecrease}>
        <Icon.Minus height={20} stroke={'gray'} />
      </TouchableOpacity>
      {/* AMOUNT  */}
      <Text tyle={styles.addMinButton}>{totalItems.length}</Text>
      {/* PLUS BUTTON */}
      <TouchableOpacity onPress={handleIncrease}>
        <Icon.Plus height={20} stroke={'gray'} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
