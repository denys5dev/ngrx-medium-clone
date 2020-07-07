import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import {
  registerAction,
  registerSuccessAction,
  registerFailureAction,
} from '../actions/register.action';
import { switchMap, map, catchError } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';
import { CurrentUserInterface } from '../../../shared/types/CurrentUser.interface';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RegisterEffect {
  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerAction),
      switchMap(({ request }) =>
        this._authService.register(request).pipe(
          map((currentUser: CurrentUserInterface) =>
            registerSuccessAction({ currentUser })
          ),
          catchError(() => of(registerFailureAction()))
        )
      )
    )
  );

  constructor(private actions$: Actions, private _authService: AuthService) {}
}
