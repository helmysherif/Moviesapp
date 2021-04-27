import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { userData } from '../userData';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser:any = new BehaviorSubject(null);
  baseURL = "https://routeegypt.herokuapp.com/"
  constructor(private _HttpClient:HttpClient){
    if(localStorage.getItem("userData") != null)
    {
      this.currentUser.next(localStorage.getItem("userData"));
    }
  }
  register(registerFormValue:any):Observable<any>
  {
    return this._HttpClient.post(this.baseURL + 'signup' , registerFormValue);
  }
  login(loginFormValue:any):Observable<any>
  {
    return this._HttpClient.post(this.baseURL + 'signin' , loginFormValue);
  }
  saveCurrentUser(first_name:any , last_name:any , email:any , token:any)
  {
    let user = new userData(first_name , last_name , email , token);
    localStorage.setItem("userData" , JSON.stringify(user));
    this.currentUser.next(user);
  }
  logout()
  {
    this.currentUser.next(null);
    localStorage.removeItem("userData");
  }
}