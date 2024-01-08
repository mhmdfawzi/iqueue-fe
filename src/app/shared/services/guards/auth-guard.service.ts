import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
// import { AuthService } from '../services/auth.service';
import { map } from 'rxjs';
import { AuthService } from '../auth-services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);

  return auth.isLoggedIn.pipe(
    map(isLoggedIn => isLoggedIn || router.createUrlTree(['login']))
  );
};
