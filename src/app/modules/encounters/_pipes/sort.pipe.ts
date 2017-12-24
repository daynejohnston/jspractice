import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(list: any[], field: string): any[] {
    if (field !== '') {
      list.sort((a, b) => {
        return (b[field] < a[field]) ? -1
                : (b[field] > a[field]) ? 1
                : 0;
      });
      return list;
    }
  }

}
