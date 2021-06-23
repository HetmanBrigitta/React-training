import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IRoleState, IRoles } from '../../interfaces/IRoles';

export const roleReducerInitialState: IRoleState = { roles: [] };

const roleReducer = createSlice({
  name: 'roleReducer',
  initialState: roleReducerInitialState,
  reducers: {
    setRoles: (state, { payload }: PayloadAction<IRoles[]>) => {
      state.roles = payload;
    }
  }
});

export const roleActions = roleReducer.actions;

export default roleReducer.reducer;
