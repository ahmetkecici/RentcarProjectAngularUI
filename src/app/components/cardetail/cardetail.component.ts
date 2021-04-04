import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetailModel } from 'src/app/models/carDetailModel';
import { CarImageModel } from 'src/app/models/carImageModel';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { CarImageService } from 'src/app/services/car-image.service';

@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css']
})
export class CardetailComponent implements OnInit {

  car:CarDetailModel;
  carImages:CarImageModel[];
  imageurl:string="https://localhost:44302/img";
  constructor(private carService:CarDetailService,private  carImageService:CarImageService,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.getCarDetails(params['carId']);
       
      }
    });
  }
 
  getCarDetails(carId:number){
      this.carService.getCarById(carId).subscribe(response=>{
          this.car=response
      });
      this.carImageService.getImagesByCar(carId).subscribe(response=>{
        this.carImages=response.data
    });
  }

 
}
