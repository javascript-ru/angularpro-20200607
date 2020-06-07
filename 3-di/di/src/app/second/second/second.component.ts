import { Component, OnInit, ApplicationRef } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-second',
  template: `
  second: {{number}}
  <button (click)="up()">+</button>
`,
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

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
