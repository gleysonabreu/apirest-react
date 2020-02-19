import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost/apirest/api'
});

export default api;