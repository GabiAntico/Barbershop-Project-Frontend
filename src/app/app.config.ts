import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import {provideHttpClient, withInterceptors} from '@angular/common/http';
import {providePrimeNG} from 'primeng/config';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import Aura from '@primeng/themes/aura';
import {MessageService} from 'primeng/api';
import {provideAnimations} from '@angular/platform-browser/animations';
import {authInterceptor} from './interceptors/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withInterceptors([authInterceptor])),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Aura
      },
      translation: {
        accept: 'Aceptar',
        reject: 'Cancelar',
        clear: 'Borrar',
        today: 'Hoy',
        dayNames: ['domingo', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado'],
        dayNamesShort: ['dom', 'lun', 'mar', 'mie', 'jue', 'vie', 'sab'],
        dayNamesMin: ['D', 'L', 'M', 'X', 'J', 'V', 'S'],
        monthNames: [
          'enero',
          'febrero',
          'marzo',
          'abril',
          'mayo',
          'junio',
          'julio',
          'agosto',
          'septiembre',
          'octubre',
          'noviembre',
          'diciembre'
        ],
        monthNamesShort: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sept', 'oct', 'nov', 'dic'],
        firstDayOfWeek: 1,
        dateFormat: 'dd/mm/yy',
        weekHeader: 'Sem'
      }
    }),
    provideAnimations(),
    MessageService
  ]
};
