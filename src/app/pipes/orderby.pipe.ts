import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'orderby'
})
export class OrderbyPipe implements PipeTransform {

  transform(array: Array<any>, args?: any): any {
    return _.sortBy(array, [args]);
  }
}
