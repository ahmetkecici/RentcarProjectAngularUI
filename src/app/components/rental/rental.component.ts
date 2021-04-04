import { Component, OnInit } from '@angular/core';
import { RentalModel } from 'src/app/models/rentalModel';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {

  rentals:RentalModel[]=[];
  dataLoaded:boolean=false;
  constructor(private rentalService:RentalService) { }

  ngOnInit(): void {
    this.getRentals();
  }

  getRentals(){
    this.rentalService.getRentals().subscribe((response)=>{
      this.rentals=response.data;
       
        console.log(response.data);
    
    })
}

}
