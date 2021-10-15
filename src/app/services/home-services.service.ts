import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class HomeServices {

  constructor(private http: HttpClient) { }

  getCompanyInfo() {
      return this.http.get('http://localhost:3200/get-all-company-info')
  }

  getCatInfo() {
    return this.http.get('http://localhost:3200/get-all-cat');
  }


}
