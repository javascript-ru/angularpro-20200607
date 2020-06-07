import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';
import { FirstModule } from './app/first/first.module';
import { SecondModule } from './app/second/second.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(FirstModule)
  .catch(err => console.error(err));

platformBrowserDynamic().bootstrapModule(SecondModule)
  .catch(err => console.error(err));
