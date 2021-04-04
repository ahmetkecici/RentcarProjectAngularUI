import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetailModel } from '../models/carDetailModel';

import { ListResponseModel } from '../models/listResponseModel';
@Injectable({
  providedIn: 'root'
})

export class CarDetailService {
  apiUrl="https://localhost:44302/api/cars/";
  constructor(private httpClient:HttpClient) { }
  getCars():Observable<ListResponseModel<CarDetailModel>>{
   return this.httpClient.get<ListResponseModel<CarDetailModel>>(this.apiUrl+"getallwithdetails");  
 }
 getCarsByBrandId(brandId:number):Observable<ListResponseModel<CarDetailModel>>{
  return this.httpClient.get<ListResponseModel<CarDetailModel>>(this.apiUrl+"getbybrandid?id="+brandId);  
}
getCarById(id:number):Observable<CarDetailModel>{
  return this.httpClient.get<CarDetailModel>(this.apiUrl+"getbyidwithdetails?id="+id);  
}
}