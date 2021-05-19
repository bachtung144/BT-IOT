import axios from 'axios';
import queryString from 'query-string';

const axiosClient = axios.create({
  baseURL: 'https://51739693de30.ngrok.io/api',
  headers: {
    'content-type': 'application/json',
  },
  paramsSerializer: params => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async config => {
  // console.warn('con',config)
  return config;
});

axiosClient.interceptors.response.use(
  response => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  error => {
    // Handle errors
    // console.warn('errr',error)
    throw error;
  },
);

export default axiosClient;
