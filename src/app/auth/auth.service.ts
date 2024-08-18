import { inject, Injectable } from '@angular/core';
import { tap } from 'rxjs';
import {Router} from "@angular/router";
import {AuthApi} from "../api/auth/auth.api";
import {LoginRequest} from "../api/auth/auth.types";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authApi = inject(AuthApi);
  private router = inject(Router);

  private readonly tokenKey = 'access_token';

  get token() {
    return localStorage.getItem(this.tokenKey);
  }

  get isAuth(): boolean {
    return !!this.token;
  }

  login(request: LoginRequest) {
    return this.authApi.login(request)
      .pipe(
        tap(response => {
          const token = `${response.data.token_type} ${response.data.access_token}`;

          localStorage.setItem(this.tokenKey, token);
        }),
      );
  }

  logout() {
    localStorage.removeItem(this.tokenKey);

    this.router.navigateByUrl('/login');
  }
}
