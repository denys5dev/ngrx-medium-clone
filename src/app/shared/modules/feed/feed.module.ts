import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './components/feed.component';
import { EffectsModule } from '@ngrx/effects';
import { GetFeedEffect } from './store/effects/getFeed.effects';
import { reducers } from './store/reducers';
import { StoreModule } from '@ngrx/store';
import { RouterModule } from '@angular/router';
import { ErrorMessageModule } from './../error-message/error-message.module';
import { LoadingModule } from './../loading/loading.module';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    StoreModule.forFeature('feed', reducers),
    EffectsModule.forFeature([GetFeedEffect]),
    ErrorMessageModule,
    LoadingModule
  ],
  declarations: [FeedComponent],
  exports: [FeedComponent],
})
export class FeedModule {}
