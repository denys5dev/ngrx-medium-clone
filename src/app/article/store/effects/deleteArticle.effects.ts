import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ArticleService } from '../../services/article.service';
import {
  deleteArticleAction,
  deleteArticleSuccessAction,
  deleteArticleFailureAction,
} from '../actions/deleteArticle.action';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class DeleteArticleEffect {
  deleteArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteArticleAction),
      switchMap(({ slug }) => {
        return this._articleService.deleteArticle(slug).pipe(
          map(() => {
            return deleteArticleSuccessAction();
          }),
          catchError(() => of(deleteArticleFailureAction()))
        );
      })
    )
  );

  redirectAfterDelete$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(deleteArticleSuccessAction),
        tap(() => {
          this.router.navigate(['/']);
        })
      ),
    { dispatch: false }
  );

  constructor(
    private router: Router,
    private actions$: Actions,
    private _articleService: ArticleService
  ) {}
}
