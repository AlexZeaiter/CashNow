import { Component, OnInit, TemplateRef } from '@angular/core';
import { CommonServiceService } from '../common-service.service';
import { Event, Router, NavigationStart } from '@angular/router';
import { Location } from '@angular/common';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APRequestDetails, AccountPayablesRequests, AP_OrderDetailsHeader, AP_RequestData, BeneficiaryDetails, BeneficiaryInvoiceDetails, SupportingDocuments } from 'src/app/models/AccountPayableRequest';
import { ApRequestService } from '../services/ap-request.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginService } from '../services/login.service';

// import * as $ from 'jquery';
declare const $: any;

@Component({
  selector: 'app-add-estimates',
  templateUrl: './add-estimates.component.html',
  styleUrls: ['./add-estimates.component.css']
})
export class AddEstimatesComponent implements OnInit {
  url;
  page = 'Add Estimate';
  apRequestForm: FormGroup;
  submitted = false;


  productSpecificationDocumentsFile: File;
  otherDocumentsFile: File;
  pOFile: File;
  invoiceFile: File;
  emailConfirmationFile: File;

  constructor(private form: FormBuilder,
    public router: Router,
    location: Location,
    public commonService: CommonServiceService,
    private service: ApRequestService,
    private httpClient: HttpClient,
    private loginService: LoginService) {

    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        if(event.url === '/edit-estimate') {
          this.page = 'Edit Estimate';
        } else {
          this.page = 'Add Estimate';
        }
      }
    });
    this.url = location.path();
    if(this.url === '/edit-estimate') {
      this.page = 'Edit Estimate';
    } else {
      this.page = 'Add Estimate';
    }    
  }

  ngOnInit() {

    this.apRequestForm = this.form.group({
      isOTS: [true],
      beneficiaryName: ['', Validators.required],
      beneficiaryAddress: ['', Validators.required],
      beneficiaryTaxId: ['', Validators.required],
      beneficiaryCommercialRegister: ['', Validators.required],
      beneficiaryContactName: ['', Validators.required],
      beneficiaryContactNumber: ['', Validators.required],
      beneficiaryContactEmail: ['', Validators.required],
      beneficiaryBank: ['', Validators.required],
      beneficiaryBankiBAN: ['', Validators.required],


      customerInvoiceNumber: ['', Validators.required],
      totalInvoiceValueInEGP: ['', Validators.required],
      totalInvoiceValueIncludesVAT: [true],
      payToBeneficiaryBefore: ['', Validators.required],
      totalValueToBePaidToBeneficiary: ['', Validators.required],

      pO: [null],
      invoice: [null],
      emailConfirmation: [null],

      deliverBefore: ['', Validators.required],
      pO_Id: ['', Validators.required],
      projectInstructions: ['', Validators.required],
      projectImplementationDuration: ['', Validators.required],
      projectSiteAddress: ['', Validators.required],
      warrantyIncluded: [true],
      warrantyDuration: ['', Validators.required],
      qualityCertifications: ['', Validators.required],
      safetyRequirements: ['', Validators.required],
      otherConditions: ['', Validators.required],
      productSpecificationDocuments: [null],
      otherDocuments: [null],

      orderItems: this.form.array([
        this.addOrderItemFormGroup()
      ]),

      Item1: ['', Validators.required],
      Quantity1: ['', Validators.required],
      Price1: ['', Validators.required],
      Amount1: ['', Validators.required],
      Item2: ['', Validators.required],
      Quantity2: ['', Validators.required],
      Price2: ['', Validators.required],
      Amount2: ['', Validators.required],


      requestID: ['', Validators.required],
      requestStatus: ['', Validators.required],
      apDueDate: ['', Validators.required],
      mediationFees: ['', Validators.required],
      sourcingFees: ['', Validators.required],
      paymentTerms: ['', Validators.required],
    });

  // Datetimepicker
    if ($('.datetimepicker').length > 0) {
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

  addOrderItemFormGroup(): FormGroup {
    return this.form.group({
      item_name:  ['', Validators.required],
      item_part_number: ['', Validators.required],
      item_description:  ['', Validators.required],
      unit_of_measurement: ['', Validators.required],
      quantity:  ['', Validators.required],
      commodity_type: ['', Validators.required],
      item_specs:  ['', Validators.required],
      preferred_brand: ['', Validators.required],
      preferred_country_of_origin:  ['', Validators.required],
      notes: ['', Validators.required]
    })
  }

  addOrderItemClick(): void{
    (<FormArray>this.apRequestForm.get('orderItems')).push(this.addOrderItemFormGroup());
  }
  removeOrderItemButtonClick(orderItemIndex: number): void{
    (<FormArray>this.apRequestForm.get('orderItems')).removeAt(orderItemIndex);
  }

  x($event) {
    console.log($event)
    debugger;
  }

  captureFileProductSpecificationDocuments(fileToUpload: File) {
    this.productSpecificationDocumentsFile = fileToUpload;
  }

  captureFileOtherDocuments(fileToUpload: File) {
    this.otherDocumentsFile = fileToUpload;
  }

  captureFilePO(fileToUpload: File) {
    this.pOFile = fileToUpload;
  }

  captureFileInvoice(fileToUpload: File) {
    this.invoiceFile = fileToUpload;
  }

  captureFileEmailConfirmation(fileToUpload: File) {
    this.emailConfirmationFile = fileToUpload;
  }

  async savePO(): Promise<any> {
    const endpoint = 'https://cashnow20210930011213.azurewebsites.net/api/ap-request/file';
    const formData: FormData = new FormData();
    formData.append('pOFile', this.pOFile[0], this.pOFile[0].name);
    return await this.httpClient
      .post(endpoint, formData ).toPromise()
  }
  async saveInvoiceFile(): Promise<any> {
    const endpoint = 'https://cashnow20210930011213.azurewebsites.net/api/ap-request/file';
    const formData: FormData = new FormData();
    formData.append('invoiceFile', this.invoiceFile[0], this.invoiceFile[0].name);
    return await this.httpClient
      .post(endpoint, formData ).toPromise()
  }
  async saveEmailConfirmationFile(): Promise<any> {
    const endpoint = 'https://cashnow20210930011213.azurewebsites.net/api/ap-request/file';
    const formData: FormData = new FormData();
    formData.append('emailConfirmationFile', this.emailConfirmationFile[0], this.emailConfirmationFile[0].name);
    return await this.httpClient
      .post(endpoint, formData ).toPromise()
  }
  async saveProductSpecificationDocumentsFile(): Promise<any> {
    const endpoint = 'https://cashnow20210930011213.azurewebsites.net/api/ap-request/product-specification';
    const formData: FormData = new FormData();
    formData.append('productSpecificationDocumentsFile', this.productSpecificationDocumentsFile[0], this.productSpecificationDocumentsFile[0].name);
    return await this.httpClient
      .post(endpoint, formData ).toPromise()
  }

  async saveOtherDocumentsFile(): Promise<any> {
    const endpoint = 'https://cashnow20210930011213.azurewebsites.net/api/ap-request/file';
    const formData: FormData = new FormData();
    formData.append('otherDocumentsFile', this.otherDocumentsFile[0], this.otherDocumentsFile[0].name);
    return await this.httpClient
      .post(endpoint, formData ).toPromise()
  }

  deleteModal(template: TemplateRef<any>, special) {
  }

  get f() {
    return this.apRequestForm.controls;
  }

  async onSubmit(){
    console.log('SUCCESS!! :-)\n\n' + JSON.stringify(this.apRequestForm.value, null, 4));
    console.log('submitted here');
    this.submitted = true;
    const loginToken = this.loginService.getLoginInfo();
    // // stop here if form is invalid
    // if (this.apRequestForm.invalid) {
    //   return;
    // }
    let apRequest = new AP_RequestData();
    apRequest.ap_order_details_items_list = this.f.orderItems.value;
    console.log(apRequest.ap_order_details_items_list);

    apRequest.account_payables_request = new AccountPayablesRequests();
    apRequest.beneficiary_details = new BeneficiaryDetails();
    apRequest.ap_request_details = new APRequestDetails();
    apRequest.ap_order_details_header = new AP_OrderDetailsHeader();
    apRequest.beneficiary_invoice_details = new BeneficiaryInvoiceDetails();
    apRequest.supporting_documents = new SupportingDocuments();

    // apRequest.account_payables_request.company_id = loginToken.CompanyId;

    apRequest.beneficiary_details.is_ots = this.f.isOTS.value;
    apRequest.beneficiary_details.beneficiary_name = this.f.beneficiaryName.value;
    apRequest.beneficiary_details.beneficiary_address = this.f.beneficiaryAddress.value;
    apRequest.beneficiary_details.beneficiary_tax_id = this.f.beneficiaryTaxId.value;
    apRequest.beneficiary_details.beneficiary_commercial_register = this.f.beneficiaryCommercialRegister.value;
    apRequest.beneficiary_details.beneficiary_contact_name = this.f.beneficiaryContactName.value;
    apRequest.beneficiary_details.beneficiary_contact_number = this.f.beneficiaryContactNumber.value;
    apRequest.beneficiary_details.beneficiary_contact_email = this.f.beneficiaryContactEmail.value;
    apRequest.beneficiary_details.beneficiary_bank = this.f.beneficiaryBank.value;
    apRequest.beneficiary_details.beneficiary_bank_iban = this.f.beneficiaryBankiBAN.value;

    apRequest.beneficiary_invoice_details.customer_invoice_number = this.f.customerInvoiceNumber.value;
    apRequest.beneficiary_invoice_details.total_invoice_value = this.f.totalInvoiceValueInEGP.value;
    apRequest.beneficiary_invoice_details.total_invoice_value_includes_vat = this.f.totalInvoiceValueIncludesVAT.value;
    apRequest.beneficiary_invoice_details.pay_to_beneficiary_due_date = this.f.payToBeneficiaryBefore.value.month + '/' + this.f.payToBeneficiaryBefore.value.day + '/' + this.f.payToBeneficiaryBefore.value.year;
    apRequest.beneficiary_invoice_details.total_value_to_be_paid_to_beneficiary = this.f.totalValueToBePaidToBeneficiary.value;

    apRequest.supporting_documents.po_file_Data = this.f.pO.value;
    apRequest.supporting_documents.invoice_file_data = this.f.invoice.value;
    apRequest.supporting_documents.email_confirmation_file_data = this.f.emailConfirmation.value;

    // let orderItems = Array<AP_OrderDetailsItems>();
    // orderItems[0] = {
    //   itemName = this.f.Item1.value,
    //   quantity = this.f.Quantity1.value,
    //   this.f.Price1.value,
    //   this.f.Amount1.value,
    // }
    apRequest.ap_order_details_header.delivery_due_date = this.f.deliverBefore.value.month + '/' + this.f.deliverBefore.value.day + '/' + this.f.deliverBefore.value.year;
    apRequest.ap_order_details_header.po_id = this.f.pO_Id.value;
    apRequest.ap_order_details_header.project_instructions = this.f.projectInstructions.value;
    apRequest.ap_order_details_header.project_implementation_duration = this.f.projectImplementationDuration.value;
    apRequest.ap_order_details_header.project_site_address = this.f.projectSiteAddress.value;
    apRequest.ap_order_details_header.warranty_included = this.f.warrantyIncluded.value;
    apRequest.ap_order_details_header.warranty_duration = this.f.warrantyDuration.value;
    apRequest.ap_order_details_header.quality_certifications = this.f.qualityCertifications.value;
    apRequest.ap_order_details_header.safety_requirements = this.f.safetyRequirements.value;
    apRequest.ap_order_details_header.other_conditions = this.f.otherConditions.value;
    apRequest.ap_order_details_header.product_specification_documents = this.f.productSpecificationDocuments.value;
    apRequest.ap_order_details_header.other_documents = this.f.otherDocuments.value;

    console.log(apRequest);

    let result = await this.service.AddAPRequest(apRequest);
    console.log('x', result);
    // get result id
    await this.saveProductSpecificationDocumentsFile();
  }

}
