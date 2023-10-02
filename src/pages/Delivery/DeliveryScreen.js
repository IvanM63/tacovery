import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS, SIZES, featured} from '../../constant';
import {useNavigation} from '@react-navigation/native';
import MapView from 'react-native-maps';
import * as Icon from 'react-native-feather';
import {emptyCart} from '../../slices/CartSlice';
import {useDispatch} from 'react-redux';

export default function DeliveryScreen() {
  const restaurant = featured.restaurants[0];
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const cancelOrder = () => {
    dispatch(emptyCart());
    navigation.navigate('Home');
  };

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
      {/* MAPS PLACE HOLDER CONTAINER */}
      <View style={{flex: 1, backgroundColor: 'black'}} />
      {/* BOTTOM SCREEN CONTAINER */}
      <View
        style={{
          backgroundColor: COLORS.primary,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}>
        {/* TEXT CONTAINER */}
        <View style={{marginHorizontal: 20, marginTop: 25}}>
          <Text
            style={{color: 'black', fontSize: SIZES.large, fontWeight: '600'}}>
            Delivery Time
          </Text>
          <Text
            style={{
              color: 'black',
              fontSize: 30,
              fontWeight: '900',
            }}>
            30 Minutes
          </Text>
          <Text
            style={{color: 'black', fontSize: SIZES.medium, fontWeight: '500'}}>
            Your Order is On the Wey!
          </Text>
        </View>
        {/* DELIVERER CONTAINER */}
        <View
          style={{
            marginHorizontal: 20,
            marginVertical: 25,
            flexDirection: 'row',
          }}>
          {/* IMAGE */}
          <Image
            width={80}
            height={80}
            style={{flex: 1, borderRadius: 15}}
            source={{uri: 'https://i.pravatar.cc/205'}}
          />
          {/* MIDDLE TEXT */}
          <View
            style={{
              flex: 2,
              flexDirection: 'column',
              marginHorizontal: 8,
              marginTop: 10,
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: SIZES.large,
                fontWeight: '600',

                justifyContent: 'flex-end',
              }}>
              Muhammad Kabul
            </Text>
            <Text
              style={{
                color: 'black',
                fontSize: 14,
                fontWeight: '400',
              }}>
              Delivery Person
            </Text>
          </View>
          {/* PHONE ICON RIGHT */}
          <TouchableOpacity
            onPress={cancelOrder}
            style={{
              borderRadius: 15,
              backgroundColor: 'white',
              alignItems: 'center',
              justifyContent: 'center',
              marginVertical: 10,
              marginHorizontal: 10,
              padding: 15,
            }}>
            <Icon.Phone
              strokeWidth={3}
              height={'28'}
              width={'28'}
              stroke={COLORS.tertiary}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
