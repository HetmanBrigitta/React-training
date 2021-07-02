export interface IKeyObject {
  [key: string]: string;
}

export interface IUserState {
  userInfo: IUser | null;
}

export interface IUsers {
  total: number | null;
  users: IUser[];
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

export type IUserUpdate = Omit<IUserUpdateRequest, 'id'>

export interface IUserUpdateRequest {
  id: number;
  email: string;
  birthDate: string;
  gender: number;
  bio: string;
  address: string;
}
