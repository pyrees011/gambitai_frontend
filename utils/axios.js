import axios from 'axios';

export const baseURL = 'http://localhost:8000/api/v1';

export const instance = axios.create({
  baseURL: baseURL,
});