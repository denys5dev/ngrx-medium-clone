import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthStateInterface } from '../types/AuthState.interface';
import { AppStateInterface } from '../../shared/types/appState.interface';

export const authFeatureSelector = createFeatureSelector<
  AppStateInterface,
  AuthStateInterface
>('auth');

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.isSubmitting
);
