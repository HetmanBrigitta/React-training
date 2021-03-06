import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUserState, IUser, IUserUpdate } from '../../interfaces/IUser';
import JwtDecode from 'jwt-decode';

export const authReducerInitialState: IUserState = {
  userInfo:
    localStorage.getItem('authToken') === null
      ? null
      : JwtDecode(localStorage.getItem('authToken')!)
};

const authReducer = createSlice({
  name: 'authReducer',
  initialState: authReducerInitialState,
  reducers: {
    setUserInfo: (state, { payload }: PayloadAction<IUser>) => {
      state.userInfo = payload;
    },
    updateUserInfo: (state, { payload }: PayloadAction<IUserUpdate>) => {
      state = { ...state, userInfo: { ...state.userInfo!, ...payload } };
    },
    resetUserInfo: (state) => {
      state.userInfo = null;
    }
  }
});

export const authActions = authReducer.actions;

export default authReducer.reducer;
