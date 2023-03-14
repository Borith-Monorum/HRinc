import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',


})
export class FilterPipe implements PipeTransform {

  transform(items: any[], field: string, value: string): any[] {
    if (!items) return [];
    if (!value || value.length == 0) return items;

    // Convert the keyword into lowercase
    const searchTerm = value.toLowerCase();

    // Filter the items that contain the searchterm in the specified field
    return items.filter(item => {
      const itemValue = item[field].toLowerCase();
      return itemValue.indexOf(searchTerm) > -1 || itemValue.includes(searchTerm);
    });
  }
}
