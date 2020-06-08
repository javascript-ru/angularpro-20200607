import { Component } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    String: <app-item title="Wow"></app-item>
    Variable: <app-item [title]="title"></app-item>
    Object: <app-item [title]="titleObject"></app-item>
    Observable: <app-item [title]="titleObservable"></app-item>
  `
})
export class AppComponent {
  title = 'Wow!Variable';
  titleObject = {
    title: 'Wow!Object'
  }
  titleObservable = of('Wow!Observable');
}
