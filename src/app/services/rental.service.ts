import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { RentalModel } from '../models/rentalModel';


@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl="https://localhost:44302/api/rentals/";
  constructor(private httpClient:HttpClient) { }
  getRentals():Observable<ListResponseModel<RentalModel>>{
   return this.httpClient.get<ListResponseModel<RentalModel>>(this.apiUrl+"getalldetails");  
 }
}
