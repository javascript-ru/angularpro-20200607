import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { ChildComponent } from './child/child.component';
import { MarkerDirective } from './marker.directive';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ChildComponent,
    MarkerDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
