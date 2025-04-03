import type { CollectionConfig } from 'payload'

export const Events: CollectionConfig = {
  slug: 'events',
  admin: {
    group: 'Events',
    useAsTitle: 'title',
    description: 'This is where you add or edit events',
  },
  access: {
    read: (): boolean => true,
    update: (): boolean => true,
    create: (): boolean => true,
    delete: (): boolean => true,
  },
  defaultSort: ['title'],
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'event_date',
      label: 'Event Date',
      type: 'date',
      required: true,
    },
    {
      name: 'event_thumbnail',
      label: 'Event Thumbnail',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'register_button',
      label: 'Register Button',
      type: 'group',
      fields: [
        { name: 'label', label: 'Label', type: 'text', required: true },
        { name: 'url', label: 'URL', type: 'text', required: true },
      ],
    },
  ],
}
