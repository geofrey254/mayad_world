import { Block } from 'payload'

export const LandingAbout: Block = {
  slug: 'landing-about',
  fields: [
    { name: 'heading', label: 'Heading', type: 'text', required: true },
    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'about_button',
      label: 'About Button',
      type: 'group',
      fields: [
        { name: 'label', type: 'text', required: true },
        { name: 'url', type: 'text', required: true },
      ],
    },
  ],
}
