import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../constant';
import {Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function RestaurantCardView({restaurant}) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('RestaurantDetailScreen', {...restaurant})
        }>
        <Image
          style={{
            width: 120,
            height: 120,
            marginHorizontal: 2,
            borderRadius: 15,
          }}
          source={restaurant.image}
        />
      </TouchableOpacity>

      <Text style={styles.textTitle}>{restaurant.name}</Text>
      <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
        <Image
          source={require('../assets/images/star.png')}
          style={{width: 10, height: 10, marginHorizontal: 2}}
        />
        <Text style={styles.textRate}>{restaurant.reviews}</Text>
        <Text style={(styles.textRate, {marginHorizontal: 6})}>•</Text>

        <Image
          source={require('../assets/images/time.png')}
          style={{width: 12, height: 12, marginHorizontal: 5}}
        />
        <Text style={styles.textDuration}>25 min</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginVertical: 10,
    marginLeft: 30,
  },
  textTitle: {
    flex: 1,
    color: 'black',
    fontSize: SIZES.medium,
    marginTop: 10,
    marginHorizontal: 2,
  },
  textRate: {
    color: 'black',
    fontSize: SIZES.small,
  },
  textDuration: {
    fontSize: SIZES.small,
    color: COLORS.gray,
  },
});
