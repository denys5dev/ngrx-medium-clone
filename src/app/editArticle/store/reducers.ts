import { Action, createReducer, on } from '@ngrx/store';
import {
  getArticleAction,
  getArticleSuccessAction,
  getArticleFailureAction,
} from './actions/getArticle.action';

import {
  updateArticleAction,
  updateArticleFailureAction,
  updateArticleSuccessAction,
} from './actions/updateArticle.action';
import { EditArticleStateInterface } from './types/editArticleState.interface';

const initialState: EditArticleStateInterface = {
  isSubmitting: false,
  isLoading: false,
  article: null,
  validationErrors: null,
};

const editArticleReducer = createReducer(
  initialState,
  on(
    updateArticleAction,
    (state): EditArticleStateInterface => ({
      ...state,
      isSubmitting: true,
    })
  ),
  on(
    updateArticleSuccessAction,
    (state): EditArticleStateInterface => ({
      ...state,
      isSubmitting: false,
    })
  ),
  on(
    updateArticleFailureAction,
    (state, action): EditArticleStateInterface => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    })
  ),
  on(
    getArticleAction,
    (state): EditArticleStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getArticleSuccessAction,
    (state, action): EditArticleStateInterface => ({
      ...state,
      isLoading: false,
      article: action.article
    })
  ),
  on(
    getArticleFailureAction,
    (state): EditArticleStateInterface => ({
      ...state,
      isLoading: false,
    })
  )
);

export function reducers(state: EditArticleStateInterface, action: Action) {
  return editArticleReducer(state, action);
}
