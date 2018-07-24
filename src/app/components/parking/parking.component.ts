import { error } from 'protractor';
import { Component, OnInit, Injectable } from '@angular/core';
import { ParkingService } from '../services/parking.service'
import { ParkingEntity } from '../services/parkingEntity';
import swal from 'sweetalert2';

@Component({
  selector: 'app-parking',
  templateUrl: './parking.component.html',
  styleUrls: ['./parking.component.css']
})

export class ParkingComponent implements OnInit {

  vehiclesInParking: ParkingEntity[];
  plateToGiveOut: String;
  parking: ParkingEntity;

  constructor(private parkingService: ParkingService) {
  }
  
  ngOnInit() {
    this.parkingService.getAllParking().subscribe(
      (vehiclesInParking) => { 
        this.vehiclesInParking = vehiclesInParking ;
      },
      error => {
        console.log();
      }
    );
  }

  giveOutFromParking(selectedVehicle: any) {
    swal({
      title: 'Taking out vehicle',
      html: `You taking out the vehicle with plate: <b> ${selectedVehicle.plate} </b>, are you sure?`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes!',
      cancelButtonText: 'No!',
      confirmButtonClass: 'btn btn-info spaceButton',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: false,
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.parkingService.giveOutVehicle(selectedVehicle.plate)
        .subscribe( parking => { this.parking = parking
            swal('Vehicle has left', `The value to pay: ${parking.payment}`, 'success')
          }
        )
      }
    })
  }
}