import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

export const authColabGuard: CanActivateFn = ( 
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot) => {

  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isLoggedIn() && authService.hasRole('colab')) {
    return true; 
  } else {
    router.navigate(['/home']); 
    return false;
  }
};
