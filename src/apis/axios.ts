import axios from 'axios';
import {
  AxiosInstance,
  AxiosInterceptorManager,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';

const API_END_POINT = ' http://52.79.219.24:8080';

const setInterceptors = (instance: AxiosInstance, auth?: boolean) => {
  auth &&
    instance.interceptors.request.use(
      (config) => {
        const rawToken = sessionStorage.getItem('YAS_USER_TOKEN');
        if (!rawToken) return;
        const TOKEN = JSON.parse(rawToken);
        // config.headers.Authorization = `bearer ${TOKEN}`;
        config.headers = {
          ...config.headers,
          token: TOKEN,
          'Content-Type': 'application/json',
        };
        return config;
      },
      (error) => {
        return Promise.reject(error.response);
      },
    );

  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      return Promise.reject(error.response);
    },
  );
  return instance;
};

const createInstance = () => {
  const instance = axios.create({ baseURL: API_END_POINT });
  return setInterceptors(instance);
};
export const request = createInstance();

const createInstanceWithAuth = () => {
  const instance = axios.create({ baseURL: API_END_POINT });
  return setInterceptors(instance, true);
};
export const authRequest = createInstanceWithAuth();
