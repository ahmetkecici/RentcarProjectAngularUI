import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerDetailModel } from '../models/customerDetailModel';

import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl="https://localhost:44302/api/customers/";
  constructor(private httpClient:HttpClient) { }
  getCustomers():Observable<ListResponseModel<CustomerDetailModel>>{
   return this.httpClient.get<ListResponseModel<CustomerDetailModel>>(this.apiUrl+"getallwithdetails");  
 }
}
