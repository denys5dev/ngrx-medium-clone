import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddToFavoritesComponent } from './addToFavorites.component';
import { EffectsModule } from '@ngrx/effects';
import { AddToFavoriteEffect } from './store/effects/addToFavorite.effect';

@NgModule({
  imports: [CommonModule, EffectsModule.forFeature([AddToFavoriteEffect])],
  declarations: [AddToFavoritesComponent],
  exports: [AddToFavoritesComponent],
})
export class AddToFavoritesModule {}
