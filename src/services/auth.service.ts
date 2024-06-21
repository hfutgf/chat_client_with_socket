import { axiosDefault } from 'api/interceptors';
import { IAuthResponse, IRegisterForm, TypeLoginForm } from 'types/user.types';
import { saveAccessToken } from './auth-token.service';

export const authService = {
  async login(data: TypeLoginForm) {
    try {
      const response = await axiosDefault.post('/auth/login', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (error) {
      const e = error as Error;
      console.log(e.message);
    }
  },

  async register(data: IRegisterForm) {
    try {
      const response = await axiosDefault.post('/auth/register', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log(response.data);
      return response.data;
    } catch (error) {
      const e = error as Error;
      console.log(e.message);
    }
  },

  async getNewTokens() {
    const response =
      await axiosDefault.post<IAuthResponse>(`/auth/access-token`);
    if (response.data.accessToken) saveAccessToken(response.data.accessToken);
    return response;
  },
};
