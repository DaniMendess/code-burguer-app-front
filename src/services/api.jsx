import axios from 'axios';

const apiCodeBurguer = axios.create({
  baseURL: 'http://localhost:3000',
});

apiCodeBurguer.interceptors.request.use(async (configs) => {
  const userData = await localStorage.getItem('codeburguer:userData');
  const token = userData && JSON.parse(userData).token;
  configs.headers.authorization = `Bearer ${token}`;
  return configs;
});

export default apiCodeBurguer;
