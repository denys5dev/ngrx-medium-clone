import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { PersistanceService } from '../../../shared/services/persistance.service';

import { Router } from '@angular/router';
import { logoutAction } from '../actions/sync.action';

@Injectable({ providedIn: 'root' })
export class LogOutEffect {
  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(logoutAction),
        tap(() => {
          this._persistenceService.set('accessToken', '');
          this._router.navigateByUrl('/');
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private _persistenceService: PersistanceService,
    private _router: Router
  ) {}
}
