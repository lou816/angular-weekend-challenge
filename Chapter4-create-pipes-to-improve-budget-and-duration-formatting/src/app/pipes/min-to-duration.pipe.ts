import { Pipe, PipeTransform } from '@angular/core';
import _ from 'lodash';

@Pipe({
  name: 'minToDuration',
  standalone: true
})
export class MinToDurationPipe implements PipeTransform {
  transform(value: string): string | null {
    const numericValue = _.toNumber(value);
    if (_.isNumber(numericValue) && numericValue >= 0) {
      const hours = Math.floor(numericValue / 60);
      const minutes = numericValue % 60;
      return `${hours}h ${minutes}min`;
    }
    return null;
  }
}
