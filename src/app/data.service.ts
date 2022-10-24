import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class DataService implements InMemoryDbService {
  constructor() {}

  createDb() {

    let customers = [
      {
          id : 1,
          name : "Ahmed Mohamed",
          email : "ahmedmohamed@nissan.com",
          phone : "01215002810",
          img : "assets/img/profiles/avatar-02.jpg",
          amount_due : "$8295",
          registered_on : "Wed Nov 16 2020 09:41:48 GMT+0530 (India Standard Time)",            
          status : "Active",
          role: "Customer"
      },
      {
          id : 2,
          name : "Marco Nabil",
          email : "marconabil@nissan.com",
          phone : "01151206530",
          img : "assets/img/profiles/avatar-03.jpg",
          amount_due : "$1750",
          registered_on : "Wed May 08 2020 09:41:48 GMT+0530 (India Standard Time)",            
          status : "Inactive",
          role: "Customer"
      },
      {
          id : 3,
          name : "Salah Nageeb",
          email : "salahnageeb@nissan.com",
          phone : "01005839683",
          img : "assets/img/profiles/avatar-04.jpg",
          amount_due : "$8295",
          registered_on : "Wed Oct 24 2020 09:41:48 GMT+0530 (India Standard Time)",            
          status : "Active",
          role: "Admin"
      }
  ]

  let estimates = [
    {
      id : 1,
      number: 'EST-17ER281',
      customer_name : "Home Furniture",
      customer_img : "assets/img/profiles/avatar-03.jpg",
      estimate_date : "Wed Nov 16 2021 09:41:48 GMT+0530 (India Standard Time)",     
      expiry_date : "Wed Nov 22 2021 09:41:48 GMT+0530 (India Standard Time)",    
      amount : "EGP 17,500",      
      status : "Accepted",
  },
    {
        id : 2,
        number: 'EST-26AS699',
        customer_name : "On Time Supplies",
        customer_img : "assets/img/profiles/avatar-04.jpg",
        estimate_date : "Wed Nov 5 2021 09:41:48 GMT+0530 (India Standard Time)",     
        expiry_date : "Wed Nov 10 2021 09:41:48 GMT+0530 (India Standard Time)",    
        amount : "EGP 150,000",      
        status : "Rejected",
    },
    {
        id : 3,
        number: 'EST-11KI214',
        customer_name : "Al Rowad",
        customer_img : "assets/img/profiles/avatar-05.jpg",
        estimate_date : "Wed Nov 1 2021 09:41:48 GMT+0530 (India Standard Time)",     
        expiry_date : "Wed Nov 5 2021 09:41:48 GMT+0530 (India Standard Time)",    
        amount : "EGP 235,000",      
        status : "Accepted",
    },
    {
        id : 4,
        number: 'EST-98HJ687',
        customer_name : "RAYA",
        customer_img : "assets/img/profiles/avatar-06.jpg",
        estimate_date : "Wed Nov 12 2021 09:41:48 GMT+0530 (India Standard Time)",     
        expiry_date : "Wed Oct 17 2021 09:41:48 GMT+0530 (India Standard Time)",    
        amount : "EGP 189,000",      
        status : "Accepted",
    },
    {
        id : 5,
        number: 'EST-71DR001',
        customer_name : "El-Sewedy Cables",
        customer_img : "assets/img/profiles/avatar-07.jpg",
        estimate_date : "Wed Oct 2 2020 09:41:48 GMT+0530 (India Standard Time)",     
        expiry_date : "Wed Oct 8 2020 09:41:48 GMT+0530 (India Standard Time)",    
        amount : "EGP 78,500",      
        status : "Accepted",
    }
]

let invoices = [
  {
    id : 1,
    number: 'INV-65ZTE10',
    customer_name : "On Time Supplies",
    customer_img : "assets/img/profiles/avatar-04.jpg",
    created_date : "Wed Nov 16 2021 09:41:48 GMT+0530 (India Standard Time)",     
    due_date : "Wed Nov 23 2021 09:41:48 GMT+0530 (India Standard Time)",    
    paid_on : "Wed Nov 23 2021 09:41:48 GMT+0530 (India Standard Time)",    
    amount : "EGP 118,000",      
    status : "Paid",
  },
  {
    id : 2,
    number: 'INV-65ZTE11',
    customer_name : "El-Sewedy Cables",
    customer_img : "assets/img/profiles/avatar-05.jpg",
    created_date : "Wed Nov 14 2021 09:41:48 GMT+0530 (India Standard Time)",     
    due_date : "Wed Nov 18 2021 09:41:48 GMT+0530 (India Standard Time)",    
    paid_on : "Wed Nov 20 2021 09:41:48 GMT+0530 (India Standard Time)",    
    amount : "EGP 222,000",      
    status : "Sent",
  },
  {
    id : 3,
    number: 'INV-65ZTE12',
    customer_name : "El-Sewedy Cables",
    customer_img : "assets/img/profiles/avatar-06.jpg",
    created_date : "Wed Nov 7 2021 09:41:48 GMT+0530 (India Standard Time)",     
    due_date : "Wed Nov 10 2021 09:41:48 GMT+0530 (India Standard Time)",    
    paid_on : "Wed Nov 13 2021 09:41:48 GMT+0530 (India Standard Time)",    
    amount : "EGP 347,000",      
    status : "Paid",
  },
  {
    id : 4,
    number: 'INV-65ZTE13',
    customer_name : "On Time Supplies",
    customer_img : "assets/img/profiles/avatar-07.jpg",
    created_date : "Wed Nov 24 2021 09:41:48 GMT+0530 (India Standard Time)",     
    due_date : "Wed Nov 25 2021 09:41:48 GMT+0530 (India Standard Time)",    
    paid_on : "",    
    amount : "EGP 826,000",      
    status : "Overdue",
  },
  {
    id : 5,
    number: 'INV-65ZTE14',
    customer_name : "ABB",
    customer_img : "assets/img/profiles/avatar-08.jpg",
    created_date : "Wed Nov 17 2021 09:41:48 GMT+0530 (India Standard Time)",     
    due_date : "Wed Nov 18 2021 09:41:48 GMT+0530 (India Standard Time)",    
    paid_on : "Wed Nov 19 2021 09:41:48 GMT+0530 (India Standard Time)",    
    amount : "EGP 519,000",      
    status : "Paid",
  },
]

let payments = [
  {
    id : 1,
    ref_id: '#158790',
    customer_name : "Leatha Bailey",
    customer_img : "assets/img/profiles/avatar-09.jpg",
    date : "Wed Sep 17 2020 09:41:48 GMT+0530 (India Standard Time)",    
    amount : "$444",          
    payment_method : "Visa 9632",
  },
  {
    id : 2,
    ref_id: '#248960',
    customer_name : "Joseph Collins",
    customer_img : "assets/img/profiles/avatar-10.jpg",
    date : "Wed Sep 12 2020 09:41:48 GMT+0530 (India Standard Time)",    
    amount : "$657",          
    payment_method : "Visa 1254",
  },
  {
    id : 3,
    ref_id: '#368230',
    customer_name : "Marie Canales",
    customer_img : "assets/img/profiles/avatar-03.jpg",
    date : "Wed Nov 17 2020 09:41:48 GMT+0530 (India Standard Time)",    
    amount : "$717",          
    payment_method : "Visa 4321",
  },
  {
    id : 4,
    ref_id: '#45268',
    customer_name : "Russell Copeland",
    customer_img : "assets/img/profiles/avatar-04.jpg",
    date : "Wed Oct 11 2020 09:41:48 GMT+0530 (India Standard Time)",    
    amount : "$120",          
    payment_method : "Visa 5689",
  },
  {
    id : 5,
    ref_id: '#542187',
    customer_name : "John Blair",
    customer_img : "assets/img/profiles/avatar-05.jpg",
    date : "Wed Oct 25 2020 09:41:48 GMT+0530 (India Standard Time)",    
    amount : "$657",          
    payment_method : "Visa 4523",
  },
  {
    id : 6,
    ref_id: '#635489',
    customer_name : "Karlene Chaidez",
    customer_img : "assets/img/profiles/avatar-06.jpg",
    date : "Wed Nov 1 2020 09:41:48 GMT+0530 (India Standard Time)",    
    amount : "$698",          
    payment_method : "Visa 8795",
  },
  {
    id : 7,
    ref_id: '#875642',
    customer_name : "Greg Lynch",
    customer_img : "assets/img/profiles/avatar-07.jpg",
    date : "Wed Oct 7 2020 09:41:48 GMT+0530 (India Standard Time)",    
    amount : "$582",          
    payment_method : "	Visa 3654",
  },
]

let expenses = [
  {
    id : 1,
    category: 'Advertising',
    customer_name : "Barbara Moore",
    customer_img : "assets/img/profiles/avatar-04.jpg",
    expense_date : "Wed Sep 15 2020 09:41:48 GMT+0530 (India Standard Time)",
    notes: "Lorem ipsum dollar..",    
    amount : "$145",          
    status : "Approved",
  },
  {
    id : 2,
    category: 'Food',
    customer_name : "Russell Copeland",
    customer_img : "assets/img/profiles/avatar-05.jpg",
    expense_date : "Wed Sep 19 2020 09:41:48 GMT+0530 (India Standard Time)",
    notes: "Lorem ipsum dollar..",    
    amount : "$214",          
    status : "Pending",
  },
  {
    id : 3,
    category: 'Marketing',
    customer_name : "Brian Johnson",
    customer_img : "assets/img/profiles/avatar-06.jpg",
    expense_date : "Wed Nov 11 2020 09:41:48 GMT+0530 (India Standard Time)",
    notes: "Lorem ipsum dollar..",    
    amount : "$254",          
    status : "Pending",
  },
  {
    id : 4,
    category: 'Repairs',
    customer_name : "Marie Canales",
    customer_img : "assets/img/profiles/avatar-08.jpg",
    expense_date : "Wed Oct 3 2020 09:41:48 GMT+0530 (India Standard Time)",
    notes: "Lorem ipsum dollar..",    
    amount : "$60",          
    status : "Approved",
  },
  {
    id : 5,
    category: 'Software',
    customer_name : "Greg Lynch",
    customer_img : "assets/img/profiles/avatar-09.jpg",
    expense_date : "Wed Oct 23 2020 09:41:48 GMT+0530 (India Standard Time)",
    notes: "Lorem ipsum dollar..",    
    amount : "$145",          
    status : "Approved",
  },
  {
    id : 6,
    category: 'Stationary',
    customer_name : "John Blair",
    customer_img : "assets/img/profiles/avatar-10.jpg",
    expense_date : "Wed Sep 29 2020 09:41:48 GMT+0530 (India Standard Time)",
    notes: "Lorem ipsum dollar..",    
    amount : "$154",          
    status : "Pending",
  },
  {
    id : 7,
    category: 'Travel',
    customer_name : "Karlene Chaidez",
    customer_img : "assets/img/profiles/avatar-11.jpg",
    expense_date : "Wed Oct 9 2020 09:41:48 GMT+0530 (India Standard Time)",
    notes: "Lorem ipsum dollar..",    
    amount : "$75",          
    status : "Approved",
  },
]

    return {
      customers: customers,
      estimates: estimates,
      invoices: invoices,
      payments: payments,
      expenses: expenses,
    };
  }
}
