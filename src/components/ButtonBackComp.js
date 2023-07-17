import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import * as Icon from 'react-native-feather';

export default function ButtonBackComp() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={styles.buttonBackContainer}>
      <Icon.ArrowLeft width={50} height={30} strokeWidth={2} stroke={'black'} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonBackContainer: {
    position: 'absolute',
    backgroundColor: 'white',
    height: 50,
    width: 50,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    top: 40,
    left: 30,
  },
});
