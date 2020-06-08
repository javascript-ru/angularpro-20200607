import { Component, OnInit, Attribute} from '@angular/core';

@Component({
  selector: 'app-item',
  template: `<p>item works!!</p>`
})
export class ItemComponent implements OnInit {

  constructor(@Attribute('title') title) { 
    console.log(title)
  }

  ngOnInit(): void {
  }

}
