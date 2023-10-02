import {
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getCategories} from '../../../api';

import {
  Burger,
  Dessert,
  Drinks,
  Fish,
  Meat,
  Pizza,
  Taco,
  categories,
} from '../../constant';

export default function Category() {
  const [activeCategory, setActiveCategory] = useState(null);
  // useEffect(() => {
  //   getCategories().then(data => {
  //     console.log(data);
  //   });
  // }, []);
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={stylesCategory.container}>
      {/* CATEGORY ITEMS LIST */}
      {/* {categories.map((category, index) => {})} */}
      <View style={stylesCategory.containerItem}>
        <TouchableOpacity style={stylesCategory.item}>
          <Burger width={55} height={55} />
        </TouchableOpacity>
        <Text>Burger</Text>
      </View>
      <View style={stylesCategory.containerItem}>
        <TouchableOpacity style={stylesCategory.item}>
          <Dessert width={55} height={55} />
        </TouchableOpacity>
        <Text>Dessert</Text>
      </View>
      <View style={stylesCategory.containerItem}>
        <TouchableOpacity style={stylesCategory.item}>
          <Drinks width={55} height={55} />
        </TouchableOpacity>
        <Text>Drinks</Text>
      </View>
      <View style={stylesCategory.containerItem}>
        <TouchableOpacity style={stylesCategory.item}>
          <Fish width={55} height={55} />
        </TouchableOpacity>
        <Text>Fish</Text>
      </View>
      <View style={stylesCategory.containerItem}>
        <TouchableOpacity style={stylesCategory.item}>
          <Meat width={55} height={55} />
        </TouchableOpacity>
        <Text>Meat</Text>
      </View>
      <View style={stylesCategory.containerItem}>
        <TouchableOpacity style={stylesCategory.item}>
          <Pizza width={55} height={55} />
        </TouchableOpacity>
        <Text>Pizza</Text>
      </View>
      <View style={stylesCategory.containerItem}>
        <TouchableOpacity style={stylesCategory.item}>
          <Taco width={55} height={55} />
        </TouchableOpacity>
        <Text>Taco</Text>
      </View>
    </ScrollView>
  );
}

const stylesCategory = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  containerItem: {
    alignItems: 'center',
    marginLeft: 15,
  },
  text: {
    color: 'gray',
    fontSize: 14,
  },
  item: {
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: 65,
    height: 65,
  },
});
