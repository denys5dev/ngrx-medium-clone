import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { PopularTagType } from './../../../types/PopularTagType';
import { map } from 'rxjs/operators';
import { GetPopularTagsResponseInterface } from '../types/GetPopularTagsResponse.interface';

@Injectable({
  providedIn: 'root',
})
export class PopularTagsService {
  constructor(private _http: HttpClient) {}

  getPopularTags(): Observable<PopularTagType[]> {
    const url = `${environment.apiUrl}/tags`;
    return this._http
      .get(url)
      .pipe(map((response: GetPopularTagsResponseInterface) => response.tags));
  }
}
