import { error } from 'protractor';
import { Component, OnInit, Injectable } from '@angular/core';
import { ParkingService } from '../services/parking.service'
import { ParkingEntity } from '../services/parkingEntity';

@Component({
  selector: 'app-parking',
  templateUrl: './parking.component.html',
  styleUrls: ['./parking.component.css']
})

export class ParkingComponent implements OnInit {

  vehiclesInParking: ParkingEntity[];

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
}