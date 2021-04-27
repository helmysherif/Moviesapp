import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  errorMsg = '';
  flag = false;
  constructor(private _authService:AuthService , private _Router:Router) {
    this.loginForm = new FormGroup({
      'email' : new FormControl('' , [Validators.email , Validators.required]),
      'password' : new FormControl('' , [Validators.required])
    })
  }
  ngOnInit(): void {
  }
  formData(loginForm:any)
  {
    if(loginForm.valid == true)
    {
      this._authService.login(this.loginForm.value).subscribe(res => {
        if(res.message == 'success')
        {
          this.flag = false;
          this._authService.saveCurrentUser(res.user.first_name , res.user.last_name , res.user.email , res.token);
          this._Router.navigate(['/home']);
        } else {
          this.flag = true;
          this.errorMsg = res.message;
        }
      })
    }
  }
}
