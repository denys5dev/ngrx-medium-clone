import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterRequestInterface } from './../types/RegisterRequest.interface';
import { CurrentUserInterface } from '../../shared/types/CurrentUser.interface';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.prod';
import { AuthResponseInterface } from '../types/AuthResponse.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _http: HttpClient) {}

  register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    const url = `${environment.apiUrl}/users`;
    return this._http
      .post<AuthResponseInterface>(url, data)
      .pipe(map((response: AuthResponseInterface) => response.user));
  }
}
