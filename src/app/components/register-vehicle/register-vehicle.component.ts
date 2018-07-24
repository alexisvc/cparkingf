import { error } from 'protractor';
import { ParkingService } from './../services/parking.service';
import { VehicleEntity } from './../services/vehicleEntity';
import { VEHICLE_TYPE, DISPLACEMENT } from './../services/arrayToLoadComponents.json';
import { Component, OnInit, Input } from '@angular/core';
import { VehicleType } from '../services/vehicleTypeEntity';
import {Router, ActivatedRoute} from '@angular/router';
import swal from 'sweetalert2';
import { errorHandler } from '@angular/platform-browser/src/browser';

@Component({
  selector: 'app-register-vehicle',
  templateUrl: './register-vehicle.component.html',
  styleUrls: ['./register-vehicle.component.css']
})
export class RegisterVehicleComponent implements OnInit {
  
  private listDisplacement;
  private listVehicleType: VehicleType[];
  private vehicle: VehicleEntity = new VehicleEntity();

  constructor(private parkingService: ParkingService) {}

  ngOnInit() {    
    this.listVehicleType = VEHICLE_TYPE;
    this.listDisplacement = DISPLACEMENT;
  }

  createParking(): void {
    this.parkingService.registerEntryVehicle(this.vehicle)      
    .subscribe(
      vehicle => {
        this.vehicle = vehicle
        swal({
          title: 'Entering vehicle', 
          html: `Vehicle with plate: <b> ${vehicle.plate} </b>was parked! `,
          type: 'success'
        })
      }, 
      
      backError => {
        console.log(backError.error)
        swal({
          title: 'Oops...',
          html: `${backError.error}`,
          type: 'error'
        })
      }          
    )
  }
}
 