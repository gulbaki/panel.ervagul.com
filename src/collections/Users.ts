import { CollectionConfig } from 'payload/types';
import { isAdminOrSelf } from '../access/isAdmin'

const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  access: {
    update: isAdminOrSelf,
    delete: isAdminOrSelf,
    create: isAdminOrSelf,
    read: () => true,
  },
  fields: [
    // Email added by default
    {
      name: 'name',
      type: 'text',
    },
      {
        name: 'role',
        type: 'select',
        options: [
          { label: 'Admin', value: 'admin' },
          { label: 'User', value: 'user' },
        ],
        required: true,
        defaultValue: 'user',
      },
  
  ],
};

export default Users;