import axios from 'axios';
import queryString from 'query-string';
import {domain} from "../domain";

const axiosClient = axios.create({
  baseURL: `${domain}/api`,
  headers: {
    'content-type': 'application/json',
  },
  paramsSerializer: params => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async config => {
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
    throw error;
  },
);

export default axiosClient;
