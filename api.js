import createClient from './sanity';
let sanityQuery = (query, params) => createClient.fetch(query, params);

export const getFeaturedRestaurants = () =>
  sanityQuery(
    '*[_type == "featured"]{...,restaurants[]->{...,foodmenu[]->{...},type->{name}}}',
  );

export const getCategories = () => {
  return sanityQuery('*[_type == "category"]{...}');
};

export const getFeaturedRestaurantsById = id => {
  return sanityQuery(
    '*[_type == "featured" && _id == $id]{...,restaurants[]->{...,foodmenu[]->,type->{name}}}[0]',
    {id},
  );
};
