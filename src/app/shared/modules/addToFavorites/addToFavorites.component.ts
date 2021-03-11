import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addTOFavoritesAction } from './store/actions/addToFavorites.action';

@Component({
  selector: 'mc-add-to-favorites',
  templateUrl: './addToFavorites.component.html',
  styleUrls: ['./addToFavorites.component.scss'],
})
export class AddToFavoritesComponent implements OnInit {
  @Input('isFavorites') isFavoritesProps: boolean;
  @Input('articleSlug') articleSlugProps: string;
  @Input('favoritesCount') favoritesCountProps: number;

  favoritesCount = 5;
  isFavorite: boolean;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.favoritesCount = this.favoritesCountProps;
    this.isFavorite = this.isFavoritesProps;
  }

  handleLike(): void {
    this.store.dispatch(
      addTOFavoritesAction({
        isFavorite: this.isFavorite,
        slug: this.articleSlugProps,
      })
    );
    if (this.isFavorite) {
      this.favoritesCount--;
    } else {
      this.favoritesCount++;
    }

    this.isFavorite = !this.isFavorite;
  }
}
