import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url: any = 'https://efa-gardenapp-backend.herokuapp.com/api/product';

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get(this.url);
  }

}
