import axios, { AxiosRequestConfig } from 'axios';
import { getAccessToken, removeFromStorage } from 'services/auth-token.service';
import { errorCatch } from './error';
import { authService } from 'services/auth.service';

const config: AxiosRequestConfig = {
  baseURL: import.meta.env.VITE_BASE_URL || 'http://localhost:8080/api',
  withCredentials: true,
};

const axiosDefault = axios.create(config);
const axiosWithAuth = axios.create(config);

axiosWithAuth.interceptors.request.use((config) => {
  const accessToken = getAccessToken();

  if (config?.headers && accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

axiosWithAuth.interceptors.response.use(
  (config) => config,
  async (error) => {
    const originalRequest = error.config;
    if (
      error?.response?.status === 401 ||
      errorCatch(error) === 'jwt expired' ||
      (errorCatch(error) === 'jwt must be provided' &&
        error.config &&
        !error.config._isRetry)
    ) {
      originalRequest._isRetry = true;

      try {
        await authService.getNewTokens();
        return axiosWithAuth.request(originalRequest);
      } catch (error) {
        if (errorCatch(error) === 'jwt expired') removeFromStorage();
      }
    }
    throw error;
  }
);

export { axiosDefault, axiosWithAuth };
