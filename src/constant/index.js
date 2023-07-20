// import images from '../assets/images';
// import icons from '../assets/icons';
import Burger from '../assets/icons/burger.svg';
import Dessert from '../assets/icons/dessert.svg';
import Drinks from '../assets/icons/drinks.svg';
import Fish from '../assets/icons/fish.svg';
import Meat from '../assets/icons/meat.svg';
import Pizza from '../assets/icons/pizza.svg';
import Taco from '../assets/icons/taco.svg';

import {COLORS, FONT, SIZES, SHADOWS} from './theme';

export {
  COLORS,
  FONT,
  SIZES,
  SHADOWS,
  Burger,
  Dessert,
  Drinks,
  Fish,
  Meat,
  Pizza,
  Taco,
};

export const categories = [
  {
    id: 1,
    name: 'Burger',
    image: '../assets/icons/burger.svg',
  },
];

export const featured = {
  id: 1,
  title: 'Popular Restaurant',
  description: 'soft and tender fried chicken',
  restaurants: [
    {
      id: 1,
      name: 'Pizzaku',
      image: require('../assets/images/pizza.jpg'),
      description: 'Hot and spicy pizzas',
      lng: -85.5324269,
      lat: 38.2145602,
      address: '434 second street',
      stars: 4,
      reviews: '4.4k',
      category: 'Pizza',
      dishes: [
        {
          id: 1,
          name: 'pizza',
          description: 'cheezy garlic pizza',
          price: 10000,
          image: require('../assets/images/pizzaMenu.jpg'),
        },
        {
          id: 2,
          name: 'pizza2',
          description: 'cheezy garlic pizza',
          price: 10000,
          image: require('../assets/images/pizzaMenu.jpg'),
        },
        {
          id: 3,
          name: 'pizza3',
          description: 'cheezy garlic pizza',
          price: 10000,
          image: require('../assets/images/pizzaMenu.jpg'),
        },
      ],
    },
    {
      id: 2,
      name: 'Pizzaku',
      image: require('../assets/images/pizza.jpg'),
      description: 'Hot and spicy pizzas',
      lng: -85.5324269,
      lat: 38.2145602,
      address: '434 second street',
      stars: 4,
      reviews: '4.4k',
      category: 'Pizza',
      dishes: [
        {
          id: 1,
          name: 'pizza',
          description: 'cheezy garlic pizza',
          price: 10000,
          image: require('../assets/images/pizzaMenu.jpg'),
        },
        {
          id: 2,
          name: 'pizza',
          description: 'cheezy garlic pizza',
          price: 10000,
          image: require('../assets/images/pizzaMenu.jpg'),
        },
        {
          id: 3,
          name: 'pizza',
          description: 'cheezy garlic pizza',
          price: 10000,
          image: require('../assets/images/pizzaMenu.jpg'),
        },
      ],
    },
    {
      id: 3,
      name: 'Pizzaku',
      image: require('../assets/images/pizza.jpg'),
      description: 'Hot and spicy pizzas',
      lng: -85.5324269,
      lat: 38.2145602,
      address: '434 second street',
      stars: 4,
      reviews: '4.4k',
      category: 'Pizza',
      dishes: [
        {
          id: 1,
          name: 'pizza',
          description: 'cheezy garlic pizza',
          price: 10000,
          image: require('../assets/images/pizzaMenu.jpg'),
        },
        {
          id: 2,
          name: 'pizza',
          description: 'cheezy garlic pizza',
          price: 10000,
          image: require('../assets/images/pizzaMenu.jpg'),
        },
        {
          id: 3,
          name: 'pizza',
          description: 'cheezy garlic pizza',
          price: 10000,
          image: require('../assets/images/pizzaMenu.jpg'),
        },
      ],
    },
  ],
};
