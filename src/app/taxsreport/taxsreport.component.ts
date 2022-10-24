import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../common-service.service';
import * as $ from 'jquery';
import 'datatables.net';

@Component({
  selector: 'app-taxsreport',
  templateUrl: './taxsreport.component.html',
  styleUrls: ['./taxsreport.component.css']
})
export class TaxsreportComponent implements OnInit {

  
    expeses: any = [];
  errorMessage: string;
  constructor(public commonService: CommonServiceService) {}

  ngOnInit(): void {    
    this.getExpenses();
  }
  getExpenses() {
    this.commonService.getExpenses().subscribe((res) => {
      this.expeses = res;
      $(function () {
        $('table').DataTable();
      });
    });
  }

}
