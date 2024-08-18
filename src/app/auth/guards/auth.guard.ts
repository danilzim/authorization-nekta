import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

export const canActivateAuth = () => {
  const isAuth = inject(AuthService).isAuth;
  if (isAuth) {
    return true;
  }
  return inject(Router).createUrlTree(['/login']);
};
