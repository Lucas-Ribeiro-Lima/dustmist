import axios from "axios";
import { parseCookies } from 'nookies';

export function getApiClient() {
  const { 'dustmist-secret': secret } = parseCookies()

  const api = axios.create({
    baseURL: 'http://localhost:3000'
  })

  if (secret) {
    api.defaults.headers['Authorization'] = `Bearer ${secret}`
  }

  return api;
}
