import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uniqueCharacters'
})
export class UniqueCharactersPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const result = value.reduce((characters, current) => {
      const index = characters.findIndex(c => c.name === current.name);
      if (index === -1) {
        characters.push({ name: current.name, count: 1});
      } else {
        characters[index].count++;
      }

      return characters;
    }, []);

    return result;
  }

}
