import { CollectionConfig } from 'payload/types';
import { slugField } from "../fields/slug";
import payload from 'payload';
const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    defaultColumns: ['title'],
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true
    },
    slugField(),
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
    },
    
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'users',
      defaultValue: ({ user }) => (user.id),
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
  ],
  endpoints: [
    {
      path: '/slug/:slug',
      method: 'get',
      handler: async (req, res, next) => {
        const result = await payload.find({
          collection: 'posts', 
          where: {
            slug: {
              equals: req.params.slug,
            },
          },
        })
        if (result) {
          res.status(200).send({ result });
        } else {
          res.status(404).send({ error: 'not found' });
        }
      }
    }
  ],

}

export default Posts;