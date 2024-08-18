import { inject } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

export const canActivateNotAuth = () => {
  const isAuth = inject(AuthService).isAuth;
  if (!isAuth) {
    return true;
  }
  return inject(Router).createUrlTree(['/']);
};
