import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { AddToFavoriteService } from '../../addToFavorite.service';
import {
  addTOFavoritesAction,
  addTOFavoritesSuccessAction,
  addTOFavoritesFailureAction,
} from '../actions/addToFavorites.action';
import { ArticleInterface } from 'src/app/shared/types/Article.interface';

@Injectable({ providedIn: 'root' })
export class AddToFavoriteEffect {
  addToFavorite$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addTOFavoritesAction),
      switchMap(({ isFavorite, slug }) => {
        const article$ = isFavorite
          ? this._addToFavoriteService.removeToFavorite(slug)
          : this._addToFavoriteService.addToFavorite(slug);
        return article$.pipe(
          map((article: ArticleInterface) => {
            return addTOFavoritesSuccessAction({ article });
          }),
          catchError(() => {
            return of(addTOFavoritesFailureAction());
          })
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private _addToFavoriteService: AddToFavoriteService
  ) {}
}
