import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProfileInterface } from 'src/app/shared/types/Profile.interface';
import { environment } from 'src/environments/environment';
import { GetUserProfileResponseInterface } from '../types/getUserProfileResponse.interface';

@Injectable({
  providedIn: 'root',
})
export class UserProfileService {
  constructor(private _http: HttpClient) {}

  getUserProfile(slug: string): Observable<ProfileInterface> {
    const url = `${environment.apiUrl}/profiles/${slug}`;

    return this._http
      .get(url)
      .pipe(
        map((response: GetUserProfileResponseInterface) => response.profile)
      );
  }
}
