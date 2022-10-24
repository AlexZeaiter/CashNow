import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegiserComponent } from './regiser.component';
import { RegisterRoutingModule } from './register-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelect2Module } from 'ng-select2';
import { DataTablesModule } from 'angular-datatables';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [RegiserComponent],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    DataTablesModule,
    NgSelect2Module,
    NgbModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RegisterModule { }
