import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import * as Icon from 'react-native-feather';
import {COLORS} from '../constant';
import {useDispatch, useSelector, useMemo} from 'react-redux';
import {
  addToCart,
  removeFromCart,
  selectCartItemsById,
} from '../redux/Cart/CartActions';

export default function AddMinButton({item}) {
  const dispatch = useDispatch();

  const totalItems = useSelector(state => state.CartReducers.items);
  const filteredItems = totalItems.filter(i => i._id == item._id);
  //console.log('totalItems', totalItems);
  const handleIncrease = () => {
    dispatch(addToCart(item));
  };
  const handleDecrease = () => {
    dispatch(removeFromCart({_id: item._id}));
  };
  return (
    <View style={styles.container}>
      {/* MINUS BUTTON */}
      <TouchableOpacity onPress={handleDecrease}>
        <Icon.Minus height={20} stroke={'gray'} />
      </TouchableOpacity>
      {/* AMOUNT  */}
      <Text tyle={styles.addMinButton}>{filteredItems.length}</Text>
      {/* PLUS BUTTON */}
      <TouchableOpacity onPress={handleIncrease}>
        <Icon.Plus height={20} stroke={'gray'} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flex: 1.5,
    backgroundColor: '#F8F8FA',
    borderRadius: 15,
    height: 40,
    marginHorizontal: 5,
  },
});
