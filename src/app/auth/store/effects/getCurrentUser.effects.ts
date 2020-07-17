import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import {
  getCurrentUserAction,
  getCurrentUserSuccessAction,
  getCurrentUserFailureAction,
} from '../actions/getCurrentUser';
import { switchMap, map, catchError } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';
import { PersistanceService } from './../../../shared/services/persistance.service';
import { CurrentUserInterface } from '../../../shared/types/CurrentUser.interface';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class GetCurrentUserEffect {
  getCurrentUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCurrentUserAction),
      switchMap(() => {
        const token = this._persistenceService.get('accessToken');
        if (!token) {
          return of(getCurrentUserFailureAction());
        }
        return this._authService.getCurrentUser().pipe(
          map((currentUser: CurrentUserInterface) => {
            return getCurrentUserSuccessAction({ currentUser });
          }),
          catchError(() => of(getCurrentUserFailureAction()))
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private _authService: AuthService,
    private _persistenceService: PersistanceService
  ) {}
}
