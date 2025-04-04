import { getPayload } from 'payload'
import React from 'react'
import HeroBlock from './components/homepage/HeroBlock'
import LandingAboutBlock from './components/homepage/LandingAbout'
import SocialBlock from './components/homepage/SocialBlock'
import EventsBlockPage from './components/homepage/EventsBlock'

import config from '@/payload.config'
import './globals.css'

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
      <div className="page">{page.layout?.map((block, index) => renderBlock(block, index))}</div>
    </div>
  )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function renderBlock(block: any, index: number) {
  switch (block.blockType) {
    case 'hero':
      return <HeroBlock key={index} block={block} />
    case 'landing-about':
      return <LandingAboutBlock block={block} key={index} />
    case 'events_section':
      return <EventsBlockPage block={block} key={index} />
    case 'socials':
      return <SocialBlock block={block} key={index} />

    default:
      return null
  }
}
