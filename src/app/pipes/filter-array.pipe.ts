import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterArray'
})
export class FilterArrayPipe implements PipeTransform {

  transform(arr: Array<any>, filterProp: any, filterTerm: string): Array<Object> {
    console.log('Filtering Array');

    return arr.filter(item => item[filterProp].toLowerCase() === filterTerm.toLowerCase())
  }

}
