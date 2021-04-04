import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetailModel } from 'src/app/models/carDetailModel';
import { CarDetailService } from 'src/app/services/car-detail.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars:CarDetailModel[]=[];
  dataLoaded:boolean=false;
  constructor(private carDetailService:CarDetailService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if (params["brandId"]) {
       this.getCarsByBrand(params["brandId"]);
       
      }
      else{
       this.getCarDetails();
      }
    });
  }

  getCarDetails(){
    this.carDetailService.getCars().subscribe((response)=>{
      this.cars=response.data;
       
       this.dataLoaded=true;
    
    })
}
getCarsByBrand(brandId:number){
  this.carDetailService.getCarsByBrandId(brandId).subscribe((response)=>{
    this.cars=response.data;
    console.log(response.data)
     
  
  
  });
 }
}