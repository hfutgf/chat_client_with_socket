export interface IRegisterForm {
  name: string;
  email: string;
  password: string;
}

export type TypeLoginForm = Omit<IRegisterForm, 'name'>;

export interface IAuthResponse {
  accessToken: string;
  id: string;
  name: string;
  email: string;
  updatedAt: Date;
  createdAt: Date;
}
