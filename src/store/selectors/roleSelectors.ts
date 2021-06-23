import { IStore } from '..';
import { IRoles } from '../../interfaces/IRoles';

export const getRoles = (state: IStore): IRoles[] => state.roleReducer.roles;
