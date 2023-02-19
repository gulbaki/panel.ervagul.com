import { GlobalConfig } from "payload/types";

export const Social: GlobalConfig = {
    slug: 'social',
    access: {
        read: () => true,
    },
    fields: [
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
        }
    ]
}