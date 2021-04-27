import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup;
  errorMsg = '';
  flag = false;
  constructor(private authService:AuthService , private _Router:Router) {
    this.registerForm = new FormGroup({
      'first_name' : new FormControl('' , Validators.required),
      'last_name' : new FormControl('' , Validators.required),
      'email' : new FormControl('' , [Validators.email , Validators.required]),
      'password' : new FormControl('' , [Validators.required , Validators.pattern(/^(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)])
    })
  }
  formData(registerForm:any)
  {
    if(registerForm.valid == true)
    {
      this.authService.register(this.registerForm.value).subscribe(res => {
        if(res.message == 'success')
        {
          this.flag = false;
          this._Router.navigate(['/login']);
        } else {
          this.flag = true;
          this.errorMsg = res.errors.email.message;
        }
      })
    }
  }
  ngOnInit(): void {
  }

}