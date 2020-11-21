import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ArticleInputInterface } from 'src/app/shared/types/articleInput.interface';
import { ArticleInterface } from 'src/app/shared/types/Article.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { SaveArticleResponseInterface } from 'src/app/shared/types/saveArticleResponse.interface';

@Injectable({
  providedIn: 'root',
})
export class EditArticleService {
  constructor(private _http: HttpClient) {}

  updateArticle(
    articleInput: ArticleInputInterface,
    slug: string,
  ): Observable<ArticleInterface> {
    const fullUrl = `${environment.apiUrl}/articles/${slug}`;
    return this._http
      .put<SaveArticleResponseInterface>(fullUrl, articleInput)
      .pipe(map((response: SaveArticleResponseInterface) => response.article));
  }
}
