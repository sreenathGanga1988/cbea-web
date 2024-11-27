import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from './app/Services/Common/authentication.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const authService = inject(AuthenticationService);
  const requiredRole = route.data['role'];
  const isLoggedIn = authService.isLoggedIn()
  const userRole = authService.getUserRole();
alert(isLoggedIn)
  if (isLoggedIn) {




    if (requiredRole && userRole !== requiredRole) {
      const router = inject(Router);
      router.navigate(['/unauthorized']);
      return false;
    }

    return true;
  } else {
    // Redirect to login page
    const router = inject(Router);
    router.navigate(['public/login']);
    return false;
  }
};
