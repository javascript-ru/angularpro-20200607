import { Component, OnInit, ApplicationRef } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-first',
  template: `
      first: {{number}}
      <button (click)="up()">+</button>

      <!-- <app-child></app-child> -->
  `,
  styleUrls: ['./first.component.css'],
  providers: [],
  viewProviders: [ ]
})
export class FirstComponent implements OnInit {

  number: number;

  constructor(private dataSevice: DataService, app: ApplicationRef) {
    this.dataSevice.getData$().subscribe( data => {
      this.number = data;
      app.tick();
    });
  }

  ngOnInit(): void {
  }

  up() {
    this.dataSevice.setData(this.number + 1);
  }

}
