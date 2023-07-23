import {createClient} from '@sanity/client';
import imageBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'i676blor',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2021-10-21',
});

const builder = imageBuilder(client);

export const urlFor = source => builder.image(source);
