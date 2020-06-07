import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: `<p (click)="doclick()">Hello, {{name}}!</p>`,
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  @Input() name;
  @Output() clicked = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  doclick() {
    this.clicked.emit(this.name);
  }

}
