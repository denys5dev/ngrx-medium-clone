import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterRequestInterface } from './../types/RegisterRequest.interface';
import { LoginRequestInterface } from './../types/LoginRequest.interface';
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

  getUser(response: AuthResponseInterface): CurrentUserInterface {
    return response.user;
  }

  register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    const url = `${environment.apiUrl}/users`;
    return this._http
      .post<AuthResponseInterface>(url, data)
      .pipe(map(this.getUser));
  }

  login(data: LoginRequestInterface): Observable<CurrentUserInterface> {
    const url = `${environment.apiUrl}/users/login`;
    return this._http
      .post<AuthResponseInterface>(url, data)
      .pipe(map(this.getUser));
  }

  getCurrentUser(): Observable<CurrentUserInterface> {
    const url = `${environment.apiUrl}/user`;
    return this._http.get(url).pipe(map(this.getUser));
  }
}
