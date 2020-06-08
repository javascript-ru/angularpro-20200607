import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
})
export class AppModule { 
  ngDoBootstrap(app: ApplicationRef) {
    // we can bootstrap on BODY
    // app.bootstrap(AppComponent, 'body');
    
    // or delay boostrap till root element is created
    setTimeout(_ => {
      document.body.appendChild(document.createElement('app-root'));
      app.bootstrap(AppComponent, 'app-root');
    }, 3000);
  }
}
