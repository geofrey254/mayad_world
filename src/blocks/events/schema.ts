import { Block } from 'payload'

export const Events: Block = {
  slug: 'events_section',
  fields: [
    {
      name: 'events',
      label: 'Events',
      type: 'relationship',
      relationTo: 'events',
      hasMany: true,
    },
  ],
}
