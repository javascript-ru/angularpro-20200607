import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  
  <button (click)="randomNumber()">random</button>
  <button (click)="findBigPrime()">hard calculations</button>
  {{output1}}
  {{output2}}
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  output1;
  output2;
  worker;

  constructor() {
    this.worker = new Worker('./my-worker.worker.ts', { type: 'module' });
  }

  randomNumber() {
    this.output1 = Math.random().toString();
  }

  findBigPrime() {
    // this.output2 = find_big_prime().toString();
    this.worker.onmessage = ({data}) => {
      this.output2 = data;
    }
    this.worker.postMessage('John');
  }
}







function find_big_prime() {
  let start = Math.floor(Math.random() * 1000000000);
  let is_prime = false;
  while (!is_prime) {
    is_prime = test_prime(start);
    start++;
  }
  return start;
}

function test_prime(n) {
  if (n === 1) {
    return false;
  } else if (n === 2) {
    return true;
  } else {
    for (var x = 2; x < n; x++) {
      if (n % x === 0) {
        return false;
      }
    }
    return true;
  }
}