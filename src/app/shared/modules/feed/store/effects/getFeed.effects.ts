import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { FeedService } from '../../services/feed.service';
import {
  getFeedAction,
  getFeedSuccessAction,
  getFeedFailureAction,
} from '../actions/getFeed.action';
import { GetFeedResponseInterface } from '../../types/GetFeedResponse.interface';

@Injectable({ providedIn: 'root' })
export class GetFeedEffect {
  getFeed$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getFeedAction),
      switchMap(({ url }) => {
        return this._feedService.getFeed(url).pipe(
          map((feed: GetFeedResponseInterface) => {
            return getFeedSuccessAction({ feed });
          }),
          catchError(() => of(getFeedFailureAction()))
        );
      })
    )
  );

  constructor(private actions$: Actions, private _feedService: FeedService) {}
}
