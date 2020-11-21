import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { ArticleInterface } from 'src/app/shared/types/Article.interface';
import { EditArticleService } from '../../service/editArticle.service';
import { updateArticleAction, updateArticleFailureAction, updateArticleSuccessAction } from '../actions/updateArticle.action';

@Injectable({ providedIn: 'root' })
export class UpdateArticleEffect {
  updateArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateArticleAction),
      switchMap(({ articleInput, slug }) =>
        this._editAuthService.updateArticle(articleInput, slug).pipe(
          map((article: ArticleInterface) => {
            return updateArticleSuccessAction({ article });
          }),
          catchError((errorResponse: HttpErrorResponse) =>
            of(
              updateArticleFailureAction({ errors: errorResponse.error.errors })
            )
          )
        )
      )
    )
  );

  redirectAfterUpdate$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(updateArticleSuccessAction),
        tap(({ article }) => {
          this._router.navigate(['/articles', article.slug]);
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private _editAuthService: EditArticleService,
    private _router: Router
  ) {}
}
