import { CollectionConfig } from 'payload/types';
import path from 'path';
import { isAdminOrSelf } from '../access/isAdmin'

export const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    staticDir: path.resolve(__dirname, '../../media'),
  },
  access: {
    update: isAdminOrSelf,
    delete: isAdminOrSelf,
    create: isAdminOrSelf,
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
    {
      name: 'darkModeFallback',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Choose an upload to render if the visitor is using dark mode.'
      }
    },
  ]
}