import { Hero } from '@/blocks/hero/schema'
import { LandingAbout } from '@/blocks/landing-about/schema'
import { Socials } from '@/blocks/socials/schema'
import { Events } from '@/blocks/events/schema'
import { About, Goals } from '@/about-blocks/schema'
import type { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      label: 'Slug',
      type: 'text',
      admin: {
        position: 'sidebar',
      },
      required: true,
    },
    {
      name: 'layout',
      label: 'Layout',
      type: 'blocks',
      blocks: [Hero, LandingAbout, Socials, Events, About, Goals],
    },
  ],
}
