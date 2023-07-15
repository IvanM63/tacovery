import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';

export default function CartScreen() {
  const {params} = useRoute();
  const navigation = useNavigation();
  let item = params;
  return (
    <View>
      <Text>CartScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
