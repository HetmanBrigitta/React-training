export interface IAuth {
  username: string;
  password: string;
}

export interface IRegister {
  email: string;
  firstName: string;
  lastName: string;
  birthDate: string | null;
  gender: number;
  bio?: string;
  address?: string;
  picture?: string;
}

export interface IPasswordConfirmation {
  passwordConfirmation: string;
}
