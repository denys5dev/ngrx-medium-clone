import { ActionTypes } from '../actionTypes';
import { createAction, props } from '@ngrx/store';
import { ArticleInterface } from '../../../shared/types/Article.interface';


export const getArticleAction = createAction(
  ActionTypes.GET_ARTICLE,
  props<{ slug: string }>()
);

export const getArticleSuccessAction = createAction(
  ActionTypes.GET_ARTICLE_SUCCESS,
  props<{ article: ArticleInterface }>()
);

export const getArticleFailureAction = createAction(ActionTypes.GET_ARTICLE_FAILURE);
