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
  searchFilters: any;
  offset: number = 0;
  pageSize: number = 5;

  constructor(private vendorService: VendorService,config: NgbRatingConfig) {
    config.max = 5;
    config.readonly = true;
   }

  ngOnInit() : void {

    this.vendorService.getCity().subscribe((data: any) => {
      this.cities = data;
    })

    this.getVendorData();

  }

  getVendorData() {
    this.vendorService.getData(this.offset, this.pageSize).subscribe((data: any) => {
      console.log(data);

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


  onPrevious() {
    this.offset = this.offset - this.pageSize -1;
    this.getVendorData()
  }

  onNext() {
    this.offset = this.offset + this.pageSize+1;
    this.getVendorData()

  }

  clearFilters() {
    this.selectedCity = '';
    this.selectedRatting = 0;
  }

}
