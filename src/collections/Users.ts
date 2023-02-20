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
    }
  ],
};

export default Users;