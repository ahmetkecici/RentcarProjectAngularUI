import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ColorModel } from '../models/colorModel';
import { ListResponseModel } from '../models/listResponseModel';


@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiUrl="https://localhost:44302/api/colors/";
  constructor(private httpClient:HttpClient) { }
  getColors():Observable<ListResponseModel<ColorModel>>{
   return this.httpClient.get<ListResponseModel<ColorModel>>(this.apiUrl+"getall");  
 }
}
