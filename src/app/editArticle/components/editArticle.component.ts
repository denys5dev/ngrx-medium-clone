import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { ArticleInterface } from 'src/app/shared/types/Article.interface';
import { ArticleInputInterface } from 'src/app/shared/types/articleInput.interface';
import { BackEndErrorsInterface } from 'src/app/shared/types/BackEndErrors.interface';
import { getArticleAction } from '../store/actions/getArticle.action';
import { updateArticleAction } from '../store/actions/updateArticle.action';
import {
  articleSelector,
  isSubmittingSelector,
  validationErrorsSelector,
} from '../store/selectors';

@Component({
  selector: 'mc-edit-article',
  templateUrl: './editArticle.component.html',
  styleUrls: ['./editArticle.component.scss'],
})
export class EditArticleComponent implements OnInit {
  initialValues$: Observable<ArticleInputInterface>;
  isSubmitting$: Observable<boolean>;
  isLoading$: Observable<boolean>;
  backendErrors$: Observable<BackEndErrorsInterface | null>;
  slug: string;
  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.initializeValues();
    this.fetchData();
  }

  initializeValues(): void {
    this.slug = this.route.snapshot.paramMap.get('slug');
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
    this.initialValues$ = this.store.pipe(
      select(articleSelector),
      filter(Boolean),
      map((article: ArticleInterface) => {
        return {
          title: article.title,
          description: article.description,
          body: article.body,
          tagList: article.tagList,
        };
      })
    );
  }

  fetchData() {
    this.store.dispatch(getArticleAction({ slug: this.slug }));
  }

  onSubmit(articleInput: ArticleInputInterface) {
    this.store.dispatch(updateArticleAction({ articleInput, slug: this.slug }));
  }
}
