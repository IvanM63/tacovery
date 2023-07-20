import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import ButtonBackComp from '../components/ButtonBackComp';
import {COLORS, SIZES} from '../constant';
import * as Icon from 'react-native-feather';

import CartListCardView from '../components/CartListCardView';
import {useSelector} from 'react-redux';
import {selectRestaurant} from '../slices/RestaurantSlice';
import {selectCartItems, selectCartTotal} from '../slices/CartSlice';

export default function CartScreen() {
  const restaurant = useSelector(selectRestaurant);
  const navigation = useNavigation();
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const [groupedItems, setGroupedItems] = useState({});

  useEffect(() => {
    const item = cartItems.reduce((group, item) => {
      if (group[item.id]) {
        group[item.id].push(item);
      } else {
        group[item.id] = [item];
      }
      return group;
    });
    setGroupedItems(item);
  }, [cartItems]);

  return (
    // CONTAINER
    <View style={styles.container}>
      {/* BUTTON BACK COMP */}
      <ButtonBackComp />
      {/* TITLE TEXT CART  */}
      <Text style={styles.textTitleContainer}>Cart</Text>

      {/* ADDRESS USER VIEW CONTAINER*/}
      <View style={styles.addressContainer}>
        {/* MAP ICON */}
        <View
          style={{
            alignItems: 'flex-end',
            flex: 0.75,
            height: '100%',
          }}>
          <Icon.MapPin
            strokeWidth={3}
            height={'20'}
            width={'20'}
            stroke={'white'}
            style={{marginHorizontal: 10, marginTop: 25}}
          />
        </View>
        {/* location container */}
        <View style={{flex: 3, flexDirection: 'column'}}>
          {/* deliver to */}
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
            }}>
            <Text style={{color: 'white', paddingTop: 15}}>Deliver to</Text>
          </View>
          {/* location */}
          <View style={{flex: 1.4}}>
            <Text style={{color: 'white', fontWeight: '600'}}>
              242 ST Marks Eve,
            </Text>
            <Text style={{color: 'white', fontWeight: '600'}}>Indonesia</Text>
          </View>
        </View>
        {/* arrow down icon */}
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,

            height: '100%',
          }}>
          <Icon.ChevronDown
            strokeWidth={3}
            height={'18'}
            width={'18'}
            stroke={'white'}
          />
        </TouchableOpacity>
      </View>
      {/* CART ITEM LIST CONTAINER */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.cartItemListContainer}>
        {Object.entries(groupedItems).map(([key, items]) => {
          let dish = items[0];
          //console.log(dish);
          return <CartListCardView key={key} item={items} />;
        })}
      </ScrollView>
      {/* FOOTER? */}
      <View
        style={{
          borderTopStartRadius: 30,
          borderTopEndRadius: 30,
          backgroundColor: COLORS.primary,
          height: 170,
          width: 'auto',
          flexDirection: 'column',
        }}>
        {/* Upper Section */}
        <View
          style={{
            flexDirection: 'row',
            flex: 2,
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 30,
            marginTop: 10,
          }}>
          <View
            style={{
              flex: 1,
              alignItems: 'flex-start',
            }}>
            <Text style={styles.textNormal}>Subtotal</Text>
            <Text style={styles.textNormal}>Delivery Fee</Text>
            <Text style={styles.textbold}>Order Total</Text>
          </View>
          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <Text style={styles.textNormal}>Rp50.000</Text>
            <Text style={styles.textNormal}>Rp10.000</Text>
            <Text style={styles.textbold}>Rp60.000</Text>
          </View>
        </View>

        {/* Button Continue Container */}
        <TouchableOpacity
          onPress={() => navigation.navigate('OrderPreparing')}
          style={{
            flex: 1,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 12,
            marginHorizontal: 30,
            marginBottom: 15,
          }}>
          <Text style={styles.textButton}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textButton: {
    color: 'black',
    fontSize: SIZES.large,
    fontWeight: '500',
  },
  textbold: {
    color: 'black',
    marginVertical: 3,
    fontWeight: 'bold',
  },
  textNormal: {
    color: 'black',
    marginVertical: 3,
  },
  cartItemListContainer: {height: 362},
  addressContainer: {
    flexDirection: 'row',
    height: 111,
    backgroundColor: COLORS.tertiary,
    borderRadius: 12,
    marginHorizontal: 30,
    marginVertical: 30,
    alignItems: 'center',
  },
  textTitleContainer: {
    fontSize: SIZES.xLarge,
    fontWeight: '500',
    color: 'black',
    marginTop: 48,
    textAlign: 'center',
    zIndex: -1,
  },
  container: {
    flexDirection: 'column',
  },
});
