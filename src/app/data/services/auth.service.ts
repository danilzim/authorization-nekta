import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { TokenResponse } from '../../auth/auth.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  http = inject(HttpClient);
  baseApiUrl: string = 'https://core.nekta.cloud/api/';

  token: string | null = null;

  get isAuth() {
    if (!this.token) {
      this.token = localStorage.getItem('token');
    }
    return !!this.token;
  }

  login(payload: {
    email: string;
    password: string;
    personal_data_access: boolean;
  }) {
    return this.http
      .post<TokenResponse>(`${this.baseApiUrl}auth/login`, payload)
      .pipe(
        tap((val) => {
          this.token = val.data.access_token;
          localStorage.setItem('access_token', this.token);
        })
      );
  }
}
