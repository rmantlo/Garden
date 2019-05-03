import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = { headers: new HttpHeaders({
  'Content-Type': 'application/json'
})}

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  url: any = 'https://efa-gardenapp-backend.herokuapp.com/api/auth/login';
  
  constructor(private http: HttpClient) { }

  login(email: string, password: string){
    return this.http.post(this.url, {email, password}, httpOptions)
  }
}
