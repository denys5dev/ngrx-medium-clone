import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { GetFeedResponseInterface } from '../types/GetFeedResponse.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FeedService {
  constructor(private _http: HttpClient) {}
  getFeed(url: string): Observable<GetFeedResponseInterface> {
    const fullUrl = environment.apiUrl + url;

    return this._http.get<GetFeedResponseInterface>(fullUrl);
  }
}
