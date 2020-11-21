import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditArticleComponent } from './components/editArticle.component';
import { EffectsModule } from '@ngrx/effects';
import { UpdateArticleEffect } from './store/effects/updateArticle.effect';
import { GetArticleEffect } from './store/effects/getArticle.effect';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { ArticleFormModule } from '../shared/modules/article-form/article-form.module';
import { LoadingModule } from '../shared/modules/loading/loading.module';

const routes: Routes = [
  { path: 'articles/:slug/edit', component: EditArticleComponent },
];

@NgModule({
  imports: [
    CommonModule,
    ArticleFormModule,
    LoadingModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('edictArticle', reducers),
    EffectsModule.forFeature([UpdateArticleEffect, GetArticleEffect]),
  ],
  declarations: [EditArticleComponent],
})
export class EditArticleModule {}
