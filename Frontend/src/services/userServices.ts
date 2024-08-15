import axios from 'axios';
import { IUsers } from '../@types/user';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const login = async (credentials :IUsers) => {

  return await api.post('/login', credentials);
  
};

