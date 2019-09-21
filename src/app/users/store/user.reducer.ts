import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ActionTypesGet, ActionTypesCreate, ActionTypesDelete, UserActions, ActionTypesEdit } from './user.actions';
import { User } from 'src/app/models/user.model';

export interface UsersState {
  users: Array<User>;
  err: any;
}

export const initialState: UsersState = {
  users: [],
  err: null
};

export function userReducer(state = initialState, action: UserActions) {
  switch (action.type) {

    case ActionTypesGet.GET_USERS_REQUEST:
      return {
        ...state
      };
    case ActionTypesGet.GET_USERS_SUCCESS:
      const newUsers: Array<User> = action.payload;
      return {
        ...state,
        users: [ ...newUsers]
      };
    case ActionTypesGet.GET_USERS_ERROR:
      const error: any = action.payload;
      return {
        ...state,
        error: {...error}
      };

      // create user
    case ActionTypesCreate.CREATE_USER_REQUEST: {
      return {
        ...state
      };
    }
    case ActionTypesCreate.CREATE_USER_SUCCESS: {
      const newUser: User = action.payload;
      return {
        ...state,
        error: null,
        users: [...state.users, newUser]
      };
    }
    case ActionTypesCreate.CREATE_USER_ERROR: {
      const errorRes: any = action.payload;
      const { error } = errorRes;
      return {
        ...state,
        error
      };
    }

    // delete user
    case ActionTypesDelete.DELETE_USER_REQUEST: {
      return state;
    }
    case ActionTypesDelete.DELETE_USER_SUCCESS: {
      const newUsers = [...state.users.filter(user => user._id !== action.payload)];
      return {
        ...state,
        users: newUsers
      };
    }
    case ActionTypesDelete.DELETE_USER_ERROR: {
      return {...state};
    }

     // edit user
     case ActionTypesEdit.EDIT_USER_REQUEST: {
      return state;
    }
    case ActionTypesEdit.EDIT_USER_SUCCESS: {
      const newUsers = [...state.users];
      const index = newUsers.findIndex(user => user._id === action.payload._id);
      newUsers[index].name = action.payload.name;
      return {...state, users: newUsers};
    }
    case ActionTypesEdit.EDIT_USER_ERROR: {
      const errorRes: any = action.payload;
      const { error } = errorRes;
      return {...state,
      error
    };
    }

    default:
      return state;
  }
}

export const getUsersState = createFeatureSelector<UsersState>('usersState');

export const getAllUsers = createSelector(getUsersState, (state: UsersState) => state.users);
export const getError = createSelector(getUsersState, (state: UsersState) => state.err);


