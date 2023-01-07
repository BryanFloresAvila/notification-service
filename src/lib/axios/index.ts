import axios from 'axios'

const URL = `${process.env.API_URL}/api`

const instanceAxios = axios.create({
  baseURL: URL,
  headers: {
    origin: `${process.env.DOMAIN_ORIGIN}:${process.env.PORT}`,
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'api-key': process.env.API_KEY
  }
})

export { instanceAxios }
