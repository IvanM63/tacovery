import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import * as Icon from 'react-native-feather';
import {COLORS} from '../constant';

export default function AddMinButton(props) {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flex: props.flex,
        backgroundColor: '#F8F8FA',
        borderRadius: 15,
        height: 40,
        marginHorizontal: 5,
      }}>
      {/* MINUS BUTTON */}
      <TouchableOpacity>
        <Icon.Minus height={20} stroke={'gray'} />
      </TouchableOpacity>
      {/* AMOUNT  */}
      <Text tyle={styles.addMinButton}>0</Text>
      {/* PLUS BUTTON */}
      <TouchableOpacity>
        <Icon.Plus height={20} stroke={'gray'} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
