import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurants',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Restaurant Name',
      validation: Rule => Rule.required(),
    },
    {
      name: 'description',
      type: 'string',
      title: 'Restaurant Description',
      validation: Rule => Rule.max(200),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Restaurant Image',
    },
    {
        name: 'lat',
        type: 'number',
        title: 'Restaurant latitude',
    },
    {
        name: 'lng',
        type: 'number',
        title: 'Restaurant longitude',
    },
    {
        name: 'address',
        type: 'string',
        title: 'Restaurant Address',
        validation: Rule => Rule.required(),
    },
    {
        name: 'rating',
        type: 'number',
        title: 'Enter number between 1-5',
        validation: Rule => Rule.required().min(1).max(5).error('Enter number between 1-5'),
    },
    {
        name: 'reviews',
        type: 'string',
        title: 'Restaurant Reviews',
    },
    {
        name: 'type',
        title: 'Category',
        validation: Rule => Rule.required(),
        type: 'reference',
        to: [{type: 'category'}],
    },
    {
        name: 'foodmenu',
        type: 'array',
        title: 'Food Menu',
        of: [{type: 'reference', to: [{type: 'food'}]}],
    },
  ],
})
