import { CollectionConfig } from 'payload/types';

export const Slider: CollectionConfig = {
  slug: 'slider',
  access: {
    read: () => true,
    create: async ({req})  =>  {
        
        const result = await req.payload.find({
            collection: 'slider'
          })

          return  result.docs.length == 0
    },
  },
  fields: [
    {
      name: 'slider', // required
      type: 'array', // required
      label: 'Image Slider',
      minRows: 1,
      maxRows: 1,
      labels: {
        singular: 'Slide',
        plural: 'Slides',
      },
     
      fields: [ // required
        {
          name: 'title',
          type: 'text',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'title',
          type: 'text',
        },
        {
          name: 'Title_small',
          type: 'text',
        },
        {
          name: 'caption',
          type: 'text',
        },

        
      ],
     
    }
  ]
};