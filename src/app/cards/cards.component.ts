import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.sass']
})
export class CardsComponent implements OnInit {


  public _url: string = "http://apitest.vendosmart.com/vendor_search_v2";
  city_url: string = "http://apitest.vendosmart.com/model/city/"
  data: any;
  cities : any;
  selectedCity: any;

  constructor(private http: HttpClient) { }

  ngOnInit() : void {

    this.http.get(this.city_url).subscribe((data: any) => {
      // console.log(data);
      this.cities = data;
    })

    this.http.get(this._url).subscribe((data: any) => {
      // console.log(data);
      this.data = data.search_results;
    })
  }

  cityChange(dropdownSelectedCity : any) {
    console.log(dropdownSelectedCity.target.value);
    this.selectedCity = dropdownSelectedCity.target.value;
  }

}
