import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ArticleInterface } from '../../types/Article.interface';
import { GetArticleResponseInterface } from '../../types/getArticleResponse.interface';

@Injectable({
  providedIn: 'root',
})
export class AddToFavoriteService {
  constructor(private _http: HttpClient) {}

  addToFavorite(slug: string): Observable<ArticleInterface> {
    const url = this.getUrl(slug);
    return this._http.post(url, {}).pipe(map(this.getArticle));
  }

  removeToFavorite(slug: string): Observable<ArticleInterface> {
    const url = this.getUrl(slug);
    return this._http.delete(url).pipe(map(this.getArticle));
  }

  getUrl(slug: string): string {
    return `${environment.apiUrl}/articles/${slug}/favorite`;
  }

  getArticle(response: GetArticleResponseInterface): ArticleInterface {
    return response.article;
  }
}
