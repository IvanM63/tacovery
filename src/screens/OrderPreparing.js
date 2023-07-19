import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import Preparing from '../assets/icons/delivery.svg';
import {useNavigation, useRoute} from '@react-navigation/native';

export default function OrderPreparing() {
  const {params} = useRoute();
  const navigation = useNavigation();
  let item = params;

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('DeliveryScreen');
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
      }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
        }}>
        <Preparing width={400} height={500} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
