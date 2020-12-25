/* eslint-disable */
import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

const baseUrl = localStorage.getItem('baseUrl_v2') || 'https://xxx.xxx.com';

let instance: any = {};
 instance = axios.create({
  baseURL: baseUrl,
  timeout: 30000,
});

instance.interceptors.request.use( (config: any)=> {
  return config;
},  (error: any)=> {
  return Promise.reject(error);
});

instance.interceptors.response.use( (response: any)=> {
  return response.data;
},  (error: any)=> {
  return Promise.reject(error);
});

export default instance
