import { ActionTypes } from '../actionTypes';
import { createAction, props } from '@ngrx/store';
import { PopularTagType } from './../../../../types/PopularTagType';

export const getPopularTagsAction = createAction(ActionTypes.GET_POPULAR_TAGS);

export const getPopularTagsActionSuccess = createAction(
  ActionTypes.GET_POPULAR_TAGS_SUCCESS,
  props<{popularTags: PopularTagType[]}>()
);

export const getPopularTagsActionFailure = createAction(
  ActionTypes.GET_POPULAR_TAGS_FAILURE
);
