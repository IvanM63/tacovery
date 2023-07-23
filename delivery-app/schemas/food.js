import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'food',
  title: 'Foods',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Food Name',
      validation: Rule => Rule.required(),
    },
    {
      name: 'description',
      type: 'string',
      title: 'Food Description',
      validation: Rule => Rule.required(),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Food Image',
    },
    {
        name: 'price',
        type: 'number',
        title: 'Food Price in IDR',
        validation: Rule => Rule.required(),
      },
  ],
})
