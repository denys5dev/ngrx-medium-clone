import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './store/reducers';
import { StoreModule } from '@ngrx/store';
import { RouterModule, Routes } from '@angular/router';
import { GetArticleEffect } from './store/effects/getArticle.effects';
import { DeleteArticleEffect } from './store/effects/deleteArticle.effects';
import { ArticleComponent } from './components/article.component';
import { ErrorMessageModule } from '../shared/modules/error-message/error-message.module';
import { LoadingModule } from '../shared/modules/loading/loading.module';
import { TagListModule } from '../shared/modules/tagList/tagList.module';

const routes: Routes = [
  { path: 'articles/:slug', component: ArticleComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('article', reducers),
    EffectsModule.forFeature([GetArticleEffect, DeleteArticleEffect]),
    ErrorMessageModule,
    LoadingModule,
    TagListModule,
  ],
  declarations: [ArticleComponent],
  exports: [ArticleComponent],
})
export class ArticleModule {}
