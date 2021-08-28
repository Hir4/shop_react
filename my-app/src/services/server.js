import axios from 'axios'

const server = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
})

export default server