import { Component, ApplicationRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cd';

  constructor(app: ApplicationRef) {
    setInterval(_ => {
      app.tick();
    }, 200);

  }
}
