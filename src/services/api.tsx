import axios from 'axios';

const apiService = axios.create({
  baseURL: 'https://api.devtranslate.io',
});

export default apiService;
