import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AppStateInterface } from '../../shared/types/appState.interface';
import { ArticleStateInterface } from '../types/articleState.interface';

export const articleFeatureSelector = createFeatureSelector<
  AppStateInterface,
  ArticleStateInterface
>('article');

export const isLoadingSelector = createSelector(
  articleFeatureSelector,
  (feddState: ArticleStateInterface) => feddState.isLoading
);

export const errorSelector = createSelector(
  articleFeatureSelector,
  (feddState: ArticleStateInterface) => feddState.error
);

export const articleSelector = createSelector(
  articleFeatureSelector,
  (feddState: ArticleStateInterface) => feddState.data
);
