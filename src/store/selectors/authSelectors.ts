import { IStore } from '..';
import { IUser } from '../../interfaces/IUser';

export const getUserInfo = (state: IStore): IUser | null => state.authReducer.userInfo;
