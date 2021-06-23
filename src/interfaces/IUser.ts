import { IRoles } from './IRoles';

export interface IUsers {
  total: number | null;
  users: IUser[];
}

export interface IUserState {
  userInfo: IUser | null;
}

export interface IUser {
  id: number | null;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  role: number;
  birthDate: string;
  gender: number;
  hotel: number | null;
  bio: string;
  address: string;
  picture: string;
  createdAt: string;
}

export interface IUserTableLabels {
  firstName: string;
  lastName: string;
  role: IRoles[];
  email: string;
  birthDate: string;
  createdAt: string;
}

export interface IKeyObject {
  [key: string]: string;
}
