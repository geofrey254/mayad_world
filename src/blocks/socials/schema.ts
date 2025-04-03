import { Block } from 'payload'

export const Socials: Block = {
  slug: 'socials',
  fields: [
    {
      name: 'twitter_url',
      label: 'Twitter URL',
      type: 'text',
    },
    {
      name: 'facebook_url',
      label: 'Facebook URL',
      type: 'text',
    },
    {
      name: 'linkedin_url',
      label: 'LinkedIn URL',
      type: 'text',
    },
    {
      name: 'instagram_url',
      label: 'Instagram URL',
      type: 'text',
    },
  ],
}
