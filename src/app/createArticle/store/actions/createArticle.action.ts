import { createAction, props } from '@ngrx/store';
import { ArticleInterface } from 'src/app/shared/types/Article.interface';
import { ArticleInputInterface } from 'src/app/shared/types/articleInput.interface';
import { BackEndErrorsInterface } from 'src/app/shared/types/BackEndErrors.interface';
import { ActionTypes } from '../actionTypes';

export const createArticleAction = createAction(
  ActionTypes.CREATE_ARTICLE,
  props<{ articleInput: ArticleInputInterface }>()
);

export const createArticleSuccessAction = createAction(
  ActionTypes.CREATE_ARTICLE_SUCCESS,
  props<{ article: ArticleInterface }>()
);

export const createArticleFailureAction = createAction(
  ActionTypes.CREATE_ARTICLE_FAILURE,
  props<{ errors: BackEndErrorsInterface }>()
);
