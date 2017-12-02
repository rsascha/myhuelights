import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// https://blog.angular.io/version-5-0-0-of-angular-now-available-37e414935ced
// Zone speed improvements
// TODO: Check why this is not working
platformBrowserDynamic().bootstrapModule(AppModule);
//platformBrowserDynamic().bootstrapModule(AppModule, {ngZone: 'noop'}).then( ref => {} );
