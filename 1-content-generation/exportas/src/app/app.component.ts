import { Component, ViewChild } from '@angular/core';
import { ColoryDirective } from './colory.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exportas';

  // @ViewChild(ColoryDirective, { static: true} ) colory: ColoryDirective;
}
