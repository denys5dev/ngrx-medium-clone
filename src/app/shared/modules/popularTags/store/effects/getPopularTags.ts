import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { PopularTagsService } from '../../services/popularTags.service';
import {
  getPopularTagsAction,
  getPopularTagsActionSuccess,
  getPopularTagsActionFailure,
} from '../actions/getPopularTags.action';
import { PopularTagType } from '../../../../types/PopularTagType';

@Injectable({ providedIn: 'root' })
export class PopularTagsEffect {
  getPopularTags$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getPopularTagsAction),
      switchMap(() => {
        return this.popularTagsService.getPopularTags().pipe(
          map((popularTags: PopularTagType[]) => {
            return getPopularTagsActionSuccess({ popularTags });
          }),
          catchError(() => {
            return of(getPopularTagsActionFailure());
          })
        );
      })
    );
  });
  constructor(
    private actions$: Actions,
    private popularTagsService: PopularTagsService
  ) {}
}
