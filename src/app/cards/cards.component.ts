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
  selectedCity: any;
  selectedRatting: number= 0;
  hovered: number=0

  constructor(private http: HttpClient,config: NgbRatingConfig) {
    config.max = 5;
   }

  ngOnInit() : void {

    this.http.get(this.city_url).subscribe((data: any) => {
      // console.log(data);
      this.cities = data;
    })

    this.http.get(this._url).subscribe((data: any) => {
      // console.log(data);
      this.items = data.search_results;
    })
  }

  cityChange(dropdownSelectedCity : any) {
    console.log(dropdownSelectedCity.target.value);
    this.selectedCity = dropdownSelectedCity.target.value;
  }

}
