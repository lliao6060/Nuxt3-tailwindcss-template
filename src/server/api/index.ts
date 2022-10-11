import { $fetch } from 'ohmyfetch'

const apiFetch = $fetch.create({
  baseURL: '/api',
  headers: {
    'Accept': 'application/json',
    'Cache-Control': 'no-cache',
  },
})

export { apiFetch }
