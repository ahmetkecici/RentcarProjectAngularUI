import { Component, OnInit } from '@angular/core';
import { BrandModel } from 'src/app/models/brandModel';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brands:BrandModel[]=[];
 currentBrand:BrandModel;
  constructor(private brandService:BrandService) { }

  ngOnInit(): void {
    this.getBrands();
  }
  getBrands(){
    this.brandService.getCustomers().subscribe((response)=>{
      this.brands=response.data;
       
       console.log(this.brands)
    
    })
}
setCurrentBrand(brand:BrandModel){
 this.currentBrand=brand;
}
getCurrentBrand(brand:BrandModel){
  if (brand==this.currentBrand) {
    return "list-group-item active";
  }else{
   return "list-group-item";
  }
 }
 
}
