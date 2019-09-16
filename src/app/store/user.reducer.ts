import { Action } from '@ngrx/store';
import { ActionTypes } from './user.actions';

export const initialState = {
  users: [],
  err: null
};

export function userReducer(state = initialState, action: Action) {
  switch (action.type) {
    case ActionTypes.GET_USERS_SUCCESS:
      return ;
    case ActionTypes.GET_USERS_ERROR:
      return ;
    default:
      return state;
  }
}
