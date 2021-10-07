import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.sass']
})
export class CardsComponent implements OnInit {

  items: any;
  cities : any;
  selectedCity: string = '';
  selectedRatting: number= 0;
  hovered: number=0
  searchFilters: any

  constructor(private vendorService: VendorService,config: NgbRatingConfig) {
    config.max = 5;
   }

  ngOnInit() : void {

    this.vendorService.getCity().subscribe((data: any) => {
      this.cities = data;
    })

    this.vendorService.getData().subscribe((data: any) => {
      this.items = data.search_results;
    })
  }

  cityChange(dropdownSelectedCity : any) {
    this.selectedCity = dropdownSelectedCity.target.value;
  }
  cityRating(dropdownSelectedRating : any) {
    this.selectedRatting = dropdownSelectedRating .target.value;
  }

  search(){
    this.searchFilters = {
      selectedRatting : this.selectedRatting,
      selectedCity : this.selectedCity,
    }
  }

  clearFilters() {
    this.selectedCity = '';
    this.selectedRatting = 0;
  }

}
