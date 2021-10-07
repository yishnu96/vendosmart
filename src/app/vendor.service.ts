import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  city_url: string = "http://apitest.vendosmart.com/model/city/";
  _url: string = "http://apitest.vendosmart.com/vendor_search";
  constructor(private http: HttpClient) { }

  getCity() {
    return this.http.get(this.city_url);
  }

  getData() {
    return this.http.get(this._url)
  }
}
