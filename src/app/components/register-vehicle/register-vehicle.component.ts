import { ParkingService } from './../services/parking.service';
import { VehicleEntity } from './../services/vehicleEntity';
import { VEHICLE_TYPE, DISPLACEMENT } from './../services/arrayToLoadComponents.json';
import { Component, OnInit } from '@angular/core';
import { VehicleType } from '../services/vehicleTypeEntity';
import {Router, ActivatedRoute} from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-register-vehicle',
  templateUrl: './register-vehicle.component.html',
  styleUrls: ['./register-vehicle.component.css']
})
export class RegisterVehicleComponent implements OnInit {
  
  private listDisplacement;
  private listVehicleType: VehicleType[];
  private vehicle: VehicleEntity = new VehicleEntity();

  constructor(private parkingService: ParkingService, 
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit() {    
    this.listVehicleType = VEHICLE_TYPE;
    this.listDisplacement = DISPLACEMENT;
  }

  createParking(): void {
    this.parkingService.registerEntryVehicle(this.vehicle)
      .subscribe(vehicle => {
        this.vehicle = vehicle
        swal('New vehicle', `Vehicle with plate: ${vehicle.plate} was parked!`, 'success')
      }
    )
  }
}
 