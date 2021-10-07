import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: any[], searchFilters: any): any[] {

    console.log(searchFilters);
    if (!items) {
      return [];
    }
    if (!searchFilters) {
      return items;
    }

    searchFilters.selectedCity = searchFilters.selectedCity.toLocaleLowerCase();

    if (searchFilters.selectedCity && searchFilters.selectedRatting==0) {
      return items.filter(it => {
        return it.city.toLocaleLowerCase().includes(searchFilters.selectedCity);
      });
    }

    if (searchFilters.selectedCity ==='' && searchFilters.selectedRatting != 0) {
      return items.filter(it => it.rating == searchFilters.selectedRatting);
    }

    if (searchFilters.selectedCity!=='' && searchFilters.selectedRatting!=0) {
      return items.filter(it => {
        return it.city.toLocaleLowerCase().includes(searchFilters.selectedCity) &&  it.rating == searchFilters.selectedRatting;
      });
    }

    return items;
  }

}
