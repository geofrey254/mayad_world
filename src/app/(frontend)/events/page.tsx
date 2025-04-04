import { getPayload } from 'payload'
import React from 'react'
import StoryBlock from '../components/about-page/Story'
import MissionVision from '../components/about-page/MissionVision'
import config from '@/payload.config'

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
      <div className="page">{page.layout?.map((block, index) => renderBlock(block, index))}</div>
    </section>
  )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function renderBlock(block: any, index: number) {
  switch (block.blockType) {
    case 'about':
      return <StoryBlock block={block} key={index} />
    case 'goals':
      return <MissionVision block={block} key={index} />
    default:
      return null
  }
}
