import { Component, OnInit } from '@angular/core';
import { CustomerDetailModel } from 'src/app/models/customerDetailModel';

import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customers:CustomerDetailModel[]=[];
  dataLoaded:boolean=false;
  constructor(private customerDetailService:CustomerService) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers(){
    this.customerDetailService.getCustomers().subscribe((response)=>{
      this.customers=response.data;
       
       
    
    })
}
}