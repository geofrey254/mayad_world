import { getPayload } from 'payload'
import React from 'react'
import { Page } from '@/payload-types'
import StoryBlock from '../components/about-page/Story'
import MissionVision from '../components/about-page/MissionVision'
import config from '@/payload.config'

const renderBlock = (block: Extract<Page['layout'], Array<unknown>>[number]) => {
  switch (block.blockType) {
    case 'about':
      return <StoryBlock block={block} key={block.id} />
    case 'goals':
      return <MissionVision block={block} key={block.id} />
    default:
      return null
  }
}

export default async function AboutPage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const {
    docs: [page],
  } = await payload.find({
    collection: 'pages',
    where: {
      slug: { equals: 'about' },
    },
  })

  if (!page) {
    return <div>Page not found</div>
  }

  return (
    <section className="w-full py-20">
      <div className="page">{page.layout?.map((block) => renderBlock(block))}</div>
    </section>
  )
}
