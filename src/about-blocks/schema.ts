import { Block } from 'payload'

export const About: Block = {
  slug: 'about',
  fields: [{ name: 'clause', type: 'textarea', required: true }],
}

export const Goals: Block = {
  slug: 'goals',
  fields: [
    { name: 'mission', type: 'textarea', required: true },
    { name: 'vision', type: 'textarea', required: true },
  ],
}
