import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

export default function Welcome() {
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
        <Image source={require('../assets/images/Welcome.png')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
