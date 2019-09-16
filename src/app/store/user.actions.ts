import { Action } from '@ngrx/store';

export enum ActionTypes {
  GET_USERS_SUCCESS = 'Get all users',
  GET_USERS_ERROR = 'Get all user with error'
}

export class GetAllUsers implements Action {
  readonly type = ActionTypes.GET_USERS_SUCCESS;
}

export class GetAllUsersWithError implements Action {
  readonly type = ActionTypes.GET_USERS_ERROR;
}

export type UserActions =
  | GetAllUsers
  | GetAllUsersWithError;
