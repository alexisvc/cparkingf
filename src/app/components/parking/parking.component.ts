import { error } from 'protractor';
import { Component, OnInit, Injectable } from '@angular/core';
import { ParkingService } from '../services/parking.service'
import { ParkingEntity } from '../services/parkingEntity';

// import { PARKING } from '../services/TestData.json';

@Component({
  selector: 'app-parking',
  templateUrl: './parking.component.html',
  styleUrls: ['./parking.component.css']
})

export class ParkingComponent implements OnInit {

  vehiclesInParking: ParkingEntity[];

  constructor(private parkingService: ParkingService) {
  }
  // List all vehicles in parking. It means, actual parking status when app-init
  ngOnInit() {
    this.parkingService.getAllParking().subscribe(
      (vehiclesInParking) => { this.vehiclesInParking = vehiclesInParking },
      error => {
        console.log();
      }
    );
  }
}