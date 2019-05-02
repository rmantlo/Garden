import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  url: any = 'https://efa-gardenapp-backend.herokuapp.com/api/auth/login';
  
  constructor(private http: HttpClient) { }
}
