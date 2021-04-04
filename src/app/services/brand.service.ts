import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { BrandModel } from '../models/brandModel';

import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl="https://localhost:44302/api/brands/";
  constructor(private httpClient:HttpClient) { }
  getCustomers():Observable<ListResponseModel<BrandModel>>{
   return this.httpClient.get<ListResponseModel<BrandModel>>(this.apiUrl+"getall");  
 }
}
