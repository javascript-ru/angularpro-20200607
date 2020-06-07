import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponent } from './first/first.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [FirstComponent],
  imports: [
    BrowserModule
  ],
  bootstrap: [FirstComponent],
  providers: []
})
export class FirstModule { }
