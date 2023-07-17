import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import ButtonBackComp from '../components/ButtonBackComp';
import {COLORS, SIZES} from '../constant';
import * as Icon from 'react-native-feather';
import {Image} from 'react-native-svg';
import AddMinButton from '../components/AddMinButton';
import CartListCardView from '../components/CartListCardView';

export default function CartScreen() {
  const {params} = useRoute();
  const navigation = useNavigation();
  let item = params;
  return (
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
        <CartListCardView />
        <CartListCardView />
        <CartListCardView />
        <CartListCardView />
        <CartListCardView />
        <CartListCardView />
      </ScrollView>
      {/* FOOTER? */}
      <View
        style={{
          borderTopStartRadius: 30,
          borderTopEndRadius: 30,
          backgroundColor: COLORS.primary,
          height: 158,
          width: 'auto',
          flexDirection: 'column',
        }}>
        {/* Upper Section */}
        <View style={{flexDirection: 'row', flex: 2}}>
          <View>
            <Text>Subtotal</Text>
            <Text>Delivery Fee</Text>
            <Text>Order Total</Text>
          </View>
          <View>
            <Text>Subtotal</Text>
            <Text>Delivery Fee</Text>
            <Text>Order Total</Text>
          </View>
        </View>

        {/* Button Continue Container */}
        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 18,
            marginHorizontal: 30,
          }}>
          <Text>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cartItemListContainer: {height: 375},
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
