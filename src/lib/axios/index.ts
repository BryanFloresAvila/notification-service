import axios from 'axios'

const URL = process.env.API_URL

const instanceAxios = axios.create({
  baseURL: URL,
  headers: {
    origin: 'http://localhost:3000',
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'api-key': process.env.API_KEY
  }
})

export { instanceAxios }
