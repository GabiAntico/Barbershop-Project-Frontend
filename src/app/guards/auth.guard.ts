import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { catchError, map, of } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { WorkContextService } from '../services/work-context.service';

export const authGuard: CanActivateFn = (_route, state) => {
  const authService = inject(AuthService);
  const workContextService = inject(WorkContextService);
  const router = inject(Router);

  if (authService.isLoggedIn()) {
    return workContextService.loadContext().pipe(
      map(context => {
        if (context.temporaryPassword && !state.url.startsWith('/change-password')) {
          return router.createUrlTree(['/change-password']);
        }

        return true;
      }),
      catchError(() => of(router.createUrlTree(['/login'])))
    );
  }

  return router.createUrlTree(['/access-denied']);
};
