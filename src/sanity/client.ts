import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from '../lib/env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
})
