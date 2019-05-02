import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loggedIn: boolean = false;

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    console.log(this.loggedIn);
  }

  loginToggle() {
     this.loggedIn = !this.loggedIn;
    console.log(this.loggedIn);
  }

  login(email: string, password: string){
    //console.log(email, password);
    this.adminService.login(email, password).subscribe(
      data => {
        console.log(data);
      }
    )
    this.loggedIn = false;
  }

}
