import { createAction, props } from '@ngrx/store';

import { ActionTypes } from '../action.types';
import { CurrentUserInterface } from '../../../shared/types/CurrentUser.interface';
import { BackEndErrorsInterface } from '../../../shared/types/BackEndErrors.interface';
import { CurrentUserInputInterface } from 'src/app/shared/types/currentUserInput.interface';

export const updateCurrentUserAction = createAction(
  ActionTypes.UPDATE_CURRENT_USER,
  props<{ currentUserInput: CurrentUserInputInterface }>()
);

export const updateCurrentUserSuccessAction = createAction(
  ActionTypes.UPDATE_CURRENT_USER_SUCCESS,
  props<{ currentUser: CurrentUserInterface }>()
);

export const updateCurrentUserFailureAction = createAction(
  ActionTypes.UPDATE_CURRENT_USER_FAILURE,
  props<{ errors: BackEndErrorsInterface }>()
);
