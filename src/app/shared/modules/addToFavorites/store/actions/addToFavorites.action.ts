import { createAction, props } from '@ngrx/store';
import { ArticleInterface } from 'src/app/shared/types/Article.interface';
import { ActionTypes } from '../actionTypes';

export const addTOFavoritesAction = createAction(
  ActionTypes.ADD_TO_FAVORITES,
  props<{ isFavorite: boolean; slug: string }>()
);

export const addTOFavoritesSuccessAction = createAction(
  ActionTypes.ADD_TO_FAVORITES_SUCCESS,
  props<{ article: ArticleInterface }>()
);

export const addTOFavoritesFailureAction = createAction(
  ActionTypes.ADD_TO_FAVORITES_FAILURE
);
