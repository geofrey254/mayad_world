import { getPayload } from 'payload'
import config from '@/payload.config'

export async function fetchEvents() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { docs: events } = await payload.find({
    collection: 'events',
    depth: 2,
  })

  return events
}
