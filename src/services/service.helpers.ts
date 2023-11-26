import axios from 'axios';

const baseURL = import.meta.env.VITE_BASE_URL;
const sessionId = import.meta.env.VITE_Session_ID;

export const api = axios.create({
  baseURL,
  headers: {
    'Session-ID': sessionId
  }
});