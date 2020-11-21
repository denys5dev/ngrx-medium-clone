import { createAction, props } from '@ngrx/store';
import { ArticleInterface } from 'src/app/shared/types/Article.interface';
import { ArticleInputInterface } from 'src/app/shared/types/articleInput.interface';
import { BackEndErrorsInterface } from 'src/app/shared/types/BackEndErrors.interface';
import { ActionTypes } from '../actionTypes';

export const updateArticleAction = createAction(
  ActionTypes.UPDATE_ARTICLE,
  props<{ articleInput: ArticleInputInterface; slug: string }>()
);

export const updateArticleSuccessAction = createAction(
  ActionTypes.UPDATE_ARTICLE_SUCCESS,
  props<{ article: ArticleInterface }>()
);

export const updateArticleFailureAction = createAction(
  ActionTypes.UPDATE_ARTICLE_FAILURE,
  props<{ errors: BackEndErrorsInterface }>()
);
