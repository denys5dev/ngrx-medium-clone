import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import {
  loginAction,
  loginSuccessAction,
  loginFailureAction,
} from '../actions/login.action';
import { switchMap, map, catchError, tap } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';
import { PersistanceService } from './../../../shared/services/persistance.service';
import { CurrentUserInterface } from '../../../shared/types/CurrentUser.interface';
import { of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class LoginEffect {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginAction),
      switchMap(({ request }) =>
        this._authService.login(request).pipe(
          map((currentUser: CurrentUserInterface) => {
            this._persistenceService.set('accessToken', currentUser.token);
            return loginSuccessAction({ currentUser });
          }),
          catchError((errorResponse: HttpErrorResponse) =>
            of(loginFailureAction({ errors: errorResponse.error.errors }))
          )
        )
      )
    )
  );

  redirectAfterSubmit$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginSuccessAction),
        tap(() => {
          this._router.navigateByUrl('/');
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private _authService: AuthService,
    private _persistenceService: PersistanceService,
    private _router: Router
  ) {}
}
