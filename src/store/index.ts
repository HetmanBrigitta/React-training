import { Action, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit';
import authReducer, { authReducerInitialState } from './reducers/authReducer';
import roleReducer, { roleReducerInitialState } from './reducers/roleReducer';

export const globalInitialState: IStore = {
  authReducer: authReducerInitialState,
  roleReducer: roleReducerInitialState
};

const store = configureStore({
  reducer: combineReducers({
    authReducer,
    roleReducer
  })
});

export default store;
export type IStore = ReturnType<typeof store.getState>;
export type AppThunk = ThunkAction<void, IStore, null, Action<string>>;
