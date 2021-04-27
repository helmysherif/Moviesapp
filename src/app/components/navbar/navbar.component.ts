import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isLoggedIn = false;
  constructor(private _authServices:AuthService , private _Router:Router) {
    _authServices.currentUser.subscribe((res:any) => {
        if(res != null)
        {
          this.isLoggedIn = true;
        } else {
          this.isLoggedIn = false;
        }
    })
  }
  logout()
  {
    this._authServices.logout();
    this._Router.navigate(['/login'])
  }
  ngOnInit(): void {
  }
}