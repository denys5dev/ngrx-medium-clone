import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';;
import { ArticleInterface } from 'src/app/shared/types/Article.interface';
import { ArticleService } from 'src/app/shared/services/article.service';
import {
  getArticleAction,
  getArticleSuccessAction,
  getArticleFailureAction,
} from '../actions/getArticle.action';

@Injectable({ providedIn: 'root' })
export class GetArticleEffect {
  getArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getArticleAction),
      switchMap(({ slug }) =>
        this._articleService.getArticle(slug).pipe(
          map((article: ArticleInterface) => {
            return getArticleSuccessAction({ article });
          }),
          catchError(() => of(getArticleFailureAction()))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private _articleService: ArticleService
  ) {}
}
