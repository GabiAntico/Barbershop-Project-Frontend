import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);
  const token = typeof localStorage !== 'undefined'
    ? localStorage.getItem('auth_token')
    : null;
  const branchId = typeof localStorage !== 'undefined'
    ? localStorage.getItem('active_branch_id')
    : null;

  if (!token) {
    return next(req).pipe(
      catchError(error => {
        if (error.status === 401 && !req.url.includes('/auth/login') && !req.url.includes('/auth/register')) {
          router.navigate(['/login']);
        }

        return throwError(() => error);
      })
    );
  }

  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`,
      ...(branchId ? { 'X-Branch-Id': branchId } : {})
    }
  });

  return next(authReq).pipe(
    catchError(error => {
      if (error.status === 401) {
        if (typeof localStorage !== 'undefined') {
          localStorage.removeItem('auth_token');
          localStorage.removeItem('active_branch_id');
        }

        router.navigate(['/login']);
      }

      return throwError(() => error);
    })
  );
};
