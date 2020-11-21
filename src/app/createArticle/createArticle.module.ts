import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateArticleComponent } from './components/createArticle/createArticle.component';
import { RouterModule } from '@angular/router';
import { ArticleFormModule } from '../shared/modules/article-form/article-form.module';
const routes = [
  {
    path: 'articles/new',
    component: CreateArticleComponent,
  },
];

@NgModule({
  imports: [CommonModule, ArticleFormModule, RouterModule.forChild(routes)],
  declarations: [CreateArticleComponent],
})
export class CreateArticleModule {}
