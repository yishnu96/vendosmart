import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  city_url: string = "http://apitest.vendosmart.com/model/city/";
  _url: string = "http://apitest.vendosmart.com/vendor_search";
  constructor(private http: HttpClient) { }

  getCity() {
    return this.http.get( this.city_url);
  }

  getData(offset: number, pageSize : number) {


    let params = new HttpParams();
    params.set('offset', offset);
    params.set('page_size', pageSize);

    return this.http.get(`https://api.vendosmart.com/vendor_search?offset=${offset}&page_size=${pageSize}`)
  }
}
