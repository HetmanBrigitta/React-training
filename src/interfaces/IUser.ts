export interface IKeyObject {
  [key: string]: string;
}

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

export interface IUserUpdate {
  id: string;
  email: string;
  birthDate: string;
  gender: number;
  bio: string;
  address: string;
  picture: string;
}

export interface IUserUpdateInitialValues {
  email: string | undefined;
  birthDate: string | undefined;
  gender: number | undefined;
  bio: string | undefined;
  address: string | undefined;
}
