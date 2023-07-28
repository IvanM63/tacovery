import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {COLORS, SIZES} from '../constant';

import CartComp from '../components/cartcomp';
import ButtonBackComp from '../components/ButtonBackComp';
import {useDispatch, useSelector} from 'react-redux';
import {setFoodsRestaurant, setRestaurant} from '../redux/RestaurantsActions';
import FoodMenuCardView from '../components/FoodMenuCardView';

export default function RestaurantDetailScreen() {
  const {params} = useRoute();
  const navigation = useNavigation();
  let item = params;
  const dispacth = useDispatch();
  const foodMenu = useSelector(state => state.RestaurantsReducers.FoodMenu);
  useEffect(() => {
    if (item) {
      dispacth(setRestaurant({...item}));
    }
    dispacth(setFoodsRestaurant(item._id));
  });

  return (
    <View style={{backgroundColor: COLORS.mainBg}}>
      <CartComp />
      <Image
        source={{uri: `http://192.168.100.5:3000${item.image}`}}
        style={{height: 250, width: 'auto'}}
      />
      <ButtonBackComp />
      <ScrollView style={styles.borderUpper}>
        {/* CONTAINER */}
        <View style={styles.container}>
          <Text style={styles.textTitle}>{item.name}</Text>
          {/* ROW RATE */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 5,
            }}>
            <Image
              source={require('../assets/images/star.png')}
              style={{width: 15, height: 15, marginHorizontal: 2}}
            />
            <Text style={styles.textRate}>{item.reviews}</Text>
            <Text style={(styles.textRate, {marginHorizontal: 6})}>•</Text>

            <Image
              source={require('../assets/images/time.png')}
              style={{width: 15, height: 15, marginHorizontal: 5}}
            />
            <Text style={styles.textDuration}>25 min</Text>
          </View>

          {/* TEXT DESC RESTAURANT */}
          <Text style={styles.textDesc}>{item.description}</Text>
          {/* Restaurant Menu Text */}
          <Text style={styles.textMenuTitle}>{item.name} Food Menu</Text>
          {/* MENU LIST CARD VIEW */}
          {foodMenu.map((item, index) => {
            return <FoodMenuCardView item={{...item}} key={index} />;
          })}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  textMenuTitle: {
    fontSize: SIZES.xLarge,
    fontWeight: '500',
    color: 'black',
  },
  textDesc: {
    fontSize: SIZES.medium,
    marginVertical: 10,
  },
  containerShortDesc: {
    flexDirection: 'column',
    marginVertical: 10,
    marginLeft: 30,
  },
  textRate: {
    color: 'black',
    fontSize: SIZES.small,
    fontWeight: '500',
  },
  textDuration: {
    fontSize: SIZES.small,
    color: COLORS.gray,
  },
  container: {
    marginHorizontal: 30,
    marginTop: 30,
  },
  textTitle: {
    fontSize: SIZES.xxLarge,
    fontWeight: '600',
    color: 'black',
  },
  borderUpper: {
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: -35,
    backgroundColor: COLORS.mainBg,
  },
});
