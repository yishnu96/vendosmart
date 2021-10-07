import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.sass']
})
export class CardsComponent implements OnInit {


  public _url: string = "http://apitest.vendosmart.com/vendor_search_v2";
  city_url: string = "http://apitest.vendosmart.com/model/city/"
  items: any;
  cities : any;
  selectedCity: string = '';
  selectedRatting: number= 0;
  hovered: number=0
  searchFilters: any

  constructor(private http: HttpClient,config: NgbRatingConfig) {
    config.max = 5;
   }

  ngOnInit() : void {

    this.http.get(this.city_url).subscribe((data: any) => {
      this.cities = data;
    })

    this.http.get(this._url).subscribe((data: any) => {
      this.items = data.search_results;
    })
  }

  cityChange(dropdownSelectedCity : any) {
    this.selectedCity = dropdownSelectedCity.target.value;
    // this.searchFilters= {
    //   selectedCity : this.selectedCity,
    //   selectedRatting : this.selectedRatting
    // }
  }
  cityRating(dropdownSelectedRating : any) {
    // console.log(dropdownSelectedRating .target.value);
    this.selectedRatting = dropdownSelectedRating .target.value;
    // this.searchFilters= {
    //   selectedRatting : this.selectedRatting,
    //   selectedCity : this.selectedCity,
    // }
  }

  search(){
    console.log(this.selectedRatting);

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
