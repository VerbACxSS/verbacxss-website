import {ApplicationConfig} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideDesignAngularKit} from 'design-angular-kit';
import {provideAnimations} from '@angular/platform-browser/animations';
import {provideHttpClient} from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient(),
    provideDesignAngularKit()
  ]
};
