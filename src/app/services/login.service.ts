import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { login } from 'src/app/models/loginModel';
import { RegistrationRequestModel } from '../models/RegistrationRequestModel';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  //apiUrl = 'https://cashnow20210930011213.azurewebsites.net/api';
  apiUrl = 'https://localhost:44371/api';
  constructor(private http: HttpClient) { }

  async loginRequest(login: login) {
    try {
      const response = await this.http.post(`${this.apiUrl}/companylogin/login`, login).toPromise();
      // store token on client: localStorage
      window.localStorage.setItem('token', JSON.stringify(response));
      const token = JSON.parse(window.localStorage.getItem('token'));
    } catch (error) {
      // handle non-200 responses
    }


    // set expiration
    setTimeout(() => {
      // clear token or something 
    }, 5000 * 60);
  }

  async register(registrationRequest: RegistrationRequestModel){
    try{
      const response = await this.http.post(`${this.apiUrl}/companylogin/register`, registrationRequest).toPromise();

    } catch (error) {

    }

  }

  getLoginInfo() {
    return JSON.parse(window.localStorage.getItem('token'));
  }
}
