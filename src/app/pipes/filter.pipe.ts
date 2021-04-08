import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(list: any[] | null , filter: string | null): any[] {
    if (!list) {
      return [];
    }
    if (!filter) {
      return list;
    }
    return list.filter((buzon: any) => buzon.name.toUpperCase().includes(filter.toLocaleUpperCase()));
  }
  }


