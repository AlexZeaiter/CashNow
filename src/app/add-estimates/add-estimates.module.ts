import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { AddEstimatesComponent } from './add-estimates.component';
import { AddEstimatesRoutingModule } from './add-estimates-routing.module';
import { NgSelect2Module } from 'ng-select2';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderItemComponent } from './order-item/order-item.component';


@NgModule({
  declarations: [ AddEstimatesComponent, OrderItemComponent ],
  imports: [
    CommonModule,
    AddEstimatesRoutingModule,
    DataTablesModule,
    NgSelect2Module,
    NgbModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AddEstimatesModule { }