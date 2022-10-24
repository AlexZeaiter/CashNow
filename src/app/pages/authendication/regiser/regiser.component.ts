import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationRequestModel } from 'src/app/models/RegistrationRequestModel';
import { LoginService } from 'src/app/services/login.service';

// import * as $ from 'jquery';
declare const $: any;

@Component({
  selector: 'app-regiser',
  templateUrl: './regiser.component.html',
  styleUrls: ['./regiser.component.css']
})
export class RegiserComponent implements OnInit {

  Interests: any = ['Supply chain financing', 'Account Payable Financing', 'Account Receivable Financing', 'Selling Products/Services'];
  CompanyTypes: any = ['Corporate', 'e-Commerce Merchant', 'Supplier/Vendor'];
  registrationRequestForm: FormGroup;

  constructor(private form: FormBuilder, 
    public router: Router,
    private httpClient: HttpClient,
    private loginService: LoginService) {
      this.registrationRequestForm = this.form.group({
        companyName: ['', Validators.required],
        companyEmailAddress: ['', Validators.required],
        companyType: ['', Validators.required],
        yearOfEstablishment: ['', Validators.required],
        companySize: ['', Validators.required],
        companyAddress: ['', Validators.required],
        companyRepContactName: ['', Validators.required],
        companyRepMobileNumber: ['', Validators.required],
        companyRepEmailAddress: ['', Validators.required],
        interestedIn: ['', Validators.required],
        password: ['', Validators.required]
      });
  }

  ngOnInit(): void {
        // Datetimepicker
  
  if($('.datetimepicker').length > 0 ){
    $('.datetimepicker').datetimepicker({
      format: 'DD-MM-YYYY',
      icons: {
        up: "fas fa-angle-up",
        down: "fas fa-angle-down",
        next: 'fas fa-angle-right',
        previous: 'fas fa-angle-left'
      }
    });
  }
  }

  get f() { 
    return this.registrationRequestForm.controls; 
  }

  changeCompanyType(e) {
    return e.target.value;
  }

  changeInterestedIn(e) {
    return e.target.value;
  }

  async onSubmit(){
    debugger;
    console.log("Here");
    let registrationRequest = new RegistrationRequestModel();

    registrationRequest.companyName = this.f.companyName.value;
    registrationRequest.companyEmailAddress = this.f.companyEmailAddress.value;
    registrationRequest.companyType = this.f.companyType.value;
    registrationRequest.yearOfEstablishment = this.f.yearOfEstablishment.value.month + '/' + this.f.yearOfEstablishment.value.day + '/' + this.f.yearOfEstablishment.value.year;
    registrationRequest.companySize = this.f.companySize.value;
    registrationRequest.companyAddress = this.f.companyAddress.value;
    registrationRequest.companyRepContactName = this.f.companyRepContactName.value;
    registrationRequest.companyRepPhoneNumber = this.f.companyRepMobileNumber.value;
    registrationRequest.companyRepEmailAddress = this.f.companyRepEmailAddress.value;
    registrationRequest.interestedIn = this.f.interestedIn.value;
    registrationRequest.companyPassword = this.f.password.value;

    console.log(registrationRequest);
    await this.loginService.register(registrationRequest);
  }
}
