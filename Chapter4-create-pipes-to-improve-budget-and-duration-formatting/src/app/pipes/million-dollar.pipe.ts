import { Pipe, PipeTransform } from '@angular/core';
import _ from 'lodash';

@Pipe({
  name: 'millionDollar',
  standalone: true
})
export class MillionDollarPipe implements PipeTransform {
  transform(value: string): string {
    if (_.includes(value, '-')) {
      const [start, end] = value.split('-').map(val => _.trim(val));
      return `$${start} to $${end}`;
    } else {
      return `$${_.trim(value)}`;
    }
  }
}
