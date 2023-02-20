import { GlobalConfig } from "payload/types";
import link from "../fields/link";
import { isAdminOrSelf } from '../access/isAdmin'

export const MainMenu: GlobalConfig = {
  slug: 'main-menu',
  access: {
    read: () => true, 
  },
  fields: [
    {
      name: 'navItems',
      type: 'array',
      fields: [
        link({
          appearances: false,
        }),
      ]
    },
    {
      label:"Logo",
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      label:"Telephone Number",
      name: 'whatsapp',
      type: 'text',
    },
    {
      label:"Mail",
      name: 'mail',
      type: 'text',
    },
    {
      label:"Location",
      name: 'location',
      type: 'text',
    },
    {
      label: 'Site Url',
      name: 'siteUrl',
      type: 'text',
    },
    {
      label: 'Site Title',
      name: 'siteTitle',
      type: 'text',
    },
    {
      label: 'Site Desc',
      name: 'siteDesc',
      type: 'text',
    },
    {
      label: 'Twitter',
      name: 'twitter',
      type: 'text',
    },
    {
      label: 'Instagram',
      name: 'instagram',
      type: 'text',
    },
    {
      label: 'Facebook',
      name: 'facebook',
      type: 'text',
    },
    {
      label: 'Footer Desc',
      name: 'footerDesc',
      type: 'text',
    },
    
  ]
}