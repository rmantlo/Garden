import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loggedIn: boolean = false;
  token: any;

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.token = localStorage.getItem('token');
  }

  loginToggle() {
    this.loggedIn = !this.loggedIn;
  }
  logout() {
    localStorage.clear();
    this.token = '';
    location.reload();
  }

  login(email: string, password: string){
    //console.log(email, password);
    this.adminService.login(email, password).subscribe(
      data => {
        //console.log(data);
        let datas: any = data;
        this.token = datas.token;
        localStorage.setItem('token', datas.token);
      }
    )
    this.loggedIn = false;
    location.reload();
  }

}
