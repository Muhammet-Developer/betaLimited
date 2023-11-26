import { store } from '../store';
import axios from 'axios';

const baseURL = import.meta.env.VITE_BASE_URL;

const createAPI = () => {
  const id = store.getState().basket.sessionId;

  const instance = axios.create({
    baseURL,
    headers: {
      'Session-ID': id
    }
  });

  instance.interceptors.request.use(config => {
    const updatedId = store.getState().basket.sessionId;
    config.headers['Session-ID'] = updatedId;
    return config;
  });

  return instance;
};

export const api = createAPI();