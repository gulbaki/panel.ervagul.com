import { CollectionConfig } from 'payload/types';

const About: CollectionConfig = {
  slug: 'about',
  labels:{singular: "About", plural: "About"},
  admin: {
    defaultColumns: ['title'],
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
    create: async ({req})  =>  {
       
      const result = await req.payload.find({
          collection: 'about'
        })

        return  result.docs.length == 0

  },
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'content',
      type: 'textarea'
    },
    {
      name: 'backgroundImage', // required
      type: 'upload', // required
      relationTo: 'media', // required
      required: true,
    }
  ],
}

export default About;