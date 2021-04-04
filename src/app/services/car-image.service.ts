import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImageModel } from '../models/carImageModel';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {
  apiUrl="https://localhost:44302/api/carimage/";
  constructor(private httpClient:HttpClient) { }
  getImagesByCar(carId:number):Observable<ListResponseModel<CarImageModel>>{
   return this.httpClient.get<ListResponseModel<CarImageModel>>(this.apiUrl+"getimagesbycarid?id="+carId);  
 }

}
