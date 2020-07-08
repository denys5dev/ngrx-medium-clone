import { createAction, props } from '@ngrx/store';

import { ActionTypes } from '../action.types';
import { LoginRequestInterface } from '../../types/LoginRequest.interface';
import { CurrentUserInterface } from '../../../shared/types/CurrentUser.interface';
import { BackEndErrorsInterface } from '../../../shared/types/BackEndErrors.interface';

export const loginAction = createAction(
  ActionTypes.LOGIN,
  props<{ request: LoginRequestInterface }>()
);

export const loginSuccessAction = createAction(
  ActionTypes.LOGIN_SUCCESS,
  props<{ currentUser: CurrentUserInterface }>()
);

export const loginFailureAction = createAction(
  ActionTypes.LOGIN_FAILURE,
  props<{ errors: BackEndErrorsInterface }>()
);
