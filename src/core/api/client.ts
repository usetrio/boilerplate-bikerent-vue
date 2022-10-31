import { API_CANDIDATE_TOKEN, API_URL } from '@/core/config'

import axios from 'axios'

const client = axios.create({
  baseURL: API_URL,
  headers: {
    authorization: API_CANDIDATE_TOKEN
  }
})

export { client }

export default client
