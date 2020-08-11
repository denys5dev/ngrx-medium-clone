import { PopularTagsStateInterface } from './../types/popularTagsState.interface';
import { createReducer, on, Action } from '@ngrx/store';
import {
  getPopularTagsAction,
  getPopularTagsActionSuccess,
  getPopularTagsActionFailure,
} from './actions/getPopularTags.action';

const initialState: PopularTagsStateInterface = {
  data: null,
  isLoading: false,
  error: null,
};

const populateTagsReducer = createReducer(
  initialState,
  on(
    getPopularTagsAction,
    (state): PopularTagsStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getPopularTagsActionSuccess,
    (state, action): PopularTagsStateInterface => ({
      ...state,
      isLoading: false,
      data: action.popularTags,
    })
  ),
  on(
    getPopularTagsActionFailure,
    (state): PopularTagsStateInterface => ({
      ...state,
      isLoading: false,
    })
  )
);

export function reducers(state: PopularTagsStateInterface, action: Action) {
  return populateTagsReducer(state, action);
}
