import { Block } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

export const Hero: Block = {
  slug: 'hero',
  fields: [
    { name: 'heading', label: 'Heading', type: 'text', required: true },
    {
      name: 'subheading',
      label: 'SubHeading',
      type: 'richText',
      required: true,
      editor: lexicalEditor(),
    },
    {
      name: 'cta_button',
      label: 'CTA Button',
      type: 'group',
      fields: [
        { name: 'label', type: 'text', required: true },
        { name: 'url', type: 'text', required: true },
      ],
    },
  ],
}
