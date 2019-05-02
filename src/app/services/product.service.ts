import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {headers: new HttpHeaders({
  'Content-Type':'application/json',
  'Authorization': localStorage.getItem('token')
})}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url: any = 'https://efa-gardenapp-backend.herokuapp.com/api/product';

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get(this.url);
  }
  
  deleteProducts(id: number){
    return this.http.delete(`${this.url}/${id}`, httpOptions);
  }

}
