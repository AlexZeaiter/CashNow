import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AP_RequestData } from 'src/app/models/AccountPayableRequest';

@Injectable({
  providedIn: 'root'
})
export class ApRequestService {

  // apiUrl = 'https://cashnow20210930011213.azurewebsites.net/api';
  apiUrl = 'https://localhost:44371/api';
  constructor(private http: HttpClient) { }

  async AddAPRequest(apRequest: AP_RequestData) {
    console.log(apRequest);
     await this.http.post(`${this.apiUrl}/ap-request/add`, apRequest).toPromise();
  }
}
