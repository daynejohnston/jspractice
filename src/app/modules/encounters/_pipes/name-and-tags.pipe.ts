import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameAndTags'
})
export class NameAndTagsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (args !== '') {
      return value.filter(v => (v.name.indexOf(args) !== -1) || (v.tags.indexOf(args) !== -1) );
    }
    return value;
  }

}
