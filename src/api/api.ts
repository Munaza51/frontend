import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000'; // Replace with your backend URL

export const api = axios.create({
  baseURL: API_BASE_URL,
});