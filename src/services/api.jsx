import axios from 'axios';

const apiCodeBurguer = axios.create({
  baseURL: 'http://localhost:3000',
});

export default apiCodeBurguer;
