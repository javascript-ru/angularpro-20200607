import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',
  pure: false
})
export class ReversePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    console.log('transform');
    return value.split('').reverse().join('');
  }

}

/*
  - translate
  - Date
*/