import { AuthStateInterface } from '../types/AuthState.interface';
import { createReducer, on, Action } from '@ngrx/store';
import { registerAction } from './actions/register.action';

const initialState: AuthStateInterface = {
  isSubmitting: false,
};

const authReducer = createReducer(
  initialState,
  on(
    registerAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
    })
  )
);

export function reducers(state: AuthStateInterface, action: Action) {
  return authReducer(state, action);
}