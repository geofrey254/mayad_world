import { getPayload } from 'payload'
import React from 'react'
import { Page } from '@/payload-types'
import HeroBlock from './components/homepage/HeroBlock'
import LandingAboutBlock from './components/homepage/LandingAbout'
import SocialBlock from './components/homepage/SocialBlock'
import EventsBlockPage from './components/homepage/EventsBlock'

import config from '@/payload.config'
import './globals.css'

const renderBlock = (block: Page['layout'][0]) => {
  switch (block.blockType) {
    case 'hero':
      return <HeroBlock block={block} key={block.id} />
    case 'landing-about':
      return <LandingAboutBlock block={block} key={block.id} />
    case 'events_section':
      return <EventsBlockPage block={block} key={block.id} />
    case 'socials':
      return <SocialBlock block={block} key={block.id} />
    default:
      return null
  }
}

export default async function HomePage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const {
    docs: [page],
  } = await payload.find({
    collection: 'pages',
    where: {
      slug: { equals: 'landing-page' },
    },
  })

  if (!page) {
    return <div>Page not found</div>
  }

  return (
    <div>
      <div className="page">{page.layout?.map((block) => renderBlock(block))}</div>
    </div>
  )
}
