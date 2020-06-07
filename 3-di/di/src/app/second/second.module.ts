import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondComponent } from './second/second.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [SecondComponent],
  imports: [
    BrowserModule
  ],
  bootstrap: [SecondComponent]
})
export class SecondModule { }
