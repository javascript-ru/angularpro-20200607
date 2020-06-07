import { Component, OnInit, ContentChild, ContentChildren, QueryList, AfterContentInit, AfterViewInit } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { LogService } from '../log.service';
import { MarkerDirective } from '../marker.directive';

@Component({
  selector: 'app-item',
  template: ` VIEW! `,
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, AfterViewInit, AfterContentInit {

  // @ViewChild()
  // @ContentChild('h', { static: true}) el: HTMLElement;
  // @ContentChild(ChildComponent, { static: true}) el: ChildComponent;
  // @ContentChild(LogService, { static: true}) el: ChildComponent;

  @ContentChildren(MarkerDirective, { read: ChildComponent}) list: QueryList<ChildComponent>;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
     console.log('ngAfterViewInit');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

}
