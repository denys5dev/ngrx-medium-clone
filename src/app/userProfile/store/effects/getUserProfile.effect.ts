import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { UserProfileService } from '../../services/userProfile.service';
import {
  getUserProfileAction,
  getUserProfileFailureAction,
  getUserProfileSuccessAction,
} from '../actions/getUserProfile.action';
import { ProfileInterface } from 'src/app/shared/types/Profile.interface';

@Injectable({ providedIn: 'root' })
export class GetUserProfileEffect {
  getUserProfile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getUserProfileAction),
      switchMap(({ slug }) => {
        return this._userProfileService.getUserProfile(slug).pipe(
          map((userProfile: ProfileInterface) => {
            return getUserProfileSuccessAction({ userProfile });
          }),
          catchError(() => of(getUserProfileFailureAction()))
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private _userProfileService: UserProfileService
  ) {}
}
