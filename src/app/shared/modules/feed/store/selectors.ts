import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FeedStateInterface } from '../types/feedState.interface';
import { AppStateInterface } from '../../../../shared/types/appState.interface';

export const feedFeatureSelector = createFeatureSelector<
  AppStateInterface,
  FeedStateInterface
>('feed');

export const isLoadingSelector = createSelector(
  feedFeatureSelector,
  (feddState: FeedStateInterface) => feddState.isLoading
);

export const errorSelector = createSelector(
  feedFeatureSelector,
  (feddState: FeedStateInterface) => feddState.error
);

export const feedSelector = createSelector(
  feedFeatureSelector,
  (feddState: FeedStateInterface) => feddState.data
);
