import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';
import { Attribute } from '@angular/compiler';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  providers: [LogService]
})
export class ChildComponent implements OnInit {

  // @Input(xxx)

  constructor(/* @Attribute('title') title */) { }

  ngOnInit(): void {
  }

}

// <app-child title="my best title">