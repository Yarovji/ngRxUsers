import { Action } from '@ngrx/store';
import { User } from 'src/app/models/user.model';

// get users
export enum ActionTypesGet {
  GET_USERS_REQUEST = '[Users] Get users request',
  GET_USERS_SUCCESS = '[Users] Get all users',
  GET_USERS_ERROR = '[Users] Get user with error'
}

export class GetUsersRequest implements Action {
  readonly type = ActionTypesGet.GET_USERS_REQUEST;
  constructor() {}
}

export class GetAllUsers implements Action {
  readonly type = ActionTypesGet.GET_USERS_SUCCESS;
  constructor(public payload: User[]) {}
}

export class GetAllUsersWithError implements Action {
  readonly type = ActionTypesGet.GET_USERS_ERROR;
  constructor(public payload: any) {}
}

// create user
export enum ActionTypesCreate {
  CREATE_USER_REQUEST = '[Users] Create user request',
  CREATE_USER_SUCCESS = '[Users] Create user',
  CREATE_USER_ERROR = '[Users] Create user with error'
}

export class CreateUserRequest implements Action {
  readonly type = ActionTypesCreate.CREATE_USER_REQUEST;
  constructor(public payload: User) {}
}

export class CreateUser implements Action {
  readonly type = ActionTypesCreate.CREATE_USER_SUCCESS;
  constructor(public payload: User) {}
}

export class CreateUserWithError implements Action {
  readonly type = ActionTypesCreate.CREATE_USER_ERROR;
  constructor(public payload: any) {}
}

// delete user
export enum ActionTypesDelete {
  DELETE_USER_REQUEST = '[Users] Delete user request',
  DELETE_USER_SUCCESS = '[Users] Delete user',
  DELETE_USER_ERROR = '[Users] Delete user with error'
}

export class DeleteUserRequest implements Action {
  readonly type = ActionTypesDelete.DELETE_USER_REQUEST;
  constructor(public payload: string) {}
}

export class DeleteUser implements Action {
  readonly type = ActionTypesDelete.DELETE_USER_SUCCESS;
  constructor(public payload: string) {}
}

export class DeleteUserWithError implements Action {
  readonly type = ActionTypesDelete.DELETE_USER_ERROR;
  constructor(public payload: any) {}
}

// edit user
export enum ActionTypesEdit {
  EDIT_USER_REQUEST = '[Users] Edit user request',
  EDIT_USER_SUCCESS = '[Users] Edit user',
  EDIT_USER_ERROR = '[Users] Edit user with error'
}

export class EditUserRequest implements Action {
  readonly type = ActionTypesEdit.EDIT_USER_REQUEST;
  constructor(public payload: User) {}
}
export class EditUser implements Action {
  readonly type = ActionTypesEdit.EDIT_USER_SUCCESS;
  constructor(public payload: User) {}
}
export class EditUserError implements Action {
  readonly type = ActionTypesEdit.EDIT_USER_ERROR;
  constructor(public payload: any) {}
}


export type UserActions =
  | GetUsersRequest
  | GetAllUsers
  | GetAllUsersWithError
  | CreateUserRequest
  | CreateUser
  | CreateUserWithError
  | DeleteUserRequest
  | DeleteUser
  | DeleteUserWithError
  | EditUserRequest
  | EditUser
  | EditUserError;
