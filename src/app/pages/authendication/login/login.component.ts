import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { login, loginModel } from 'src/app/models/loginModel';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  @Output() loggedIn: EventEmitter<Boolean> =
  new EventEmitter<Boolean>();  
  loginForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(private form: FormBuilder,
    private loginInfo: loginModel,
    private router: Router,
    private service: LoginService) {
      this.loginInfo.userName = "";
      this.loginInfo.loggedIn = false;
      this.loginForm = this.form.group({
        username: ['', Validators.required],
        password: ['', Validators.required],
      });
  }

  ngOnInit(): void {

  }

  get f() { return this.loginForm.controls; }


  async onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    let userCred = new login;
    userCred.userName = this.f.username.value;
    userCred.passWord = this.f.password.value;
    let result = await this.service.loginRequest(userCred);
    

    
  }
}
