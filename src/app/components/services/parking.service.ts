import { VehicleEntity } from './vehicleEntity';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ParkingEntity } from './parkingEntity';

@Injectable()
export class ParkingService {  
  private urlEndPointFindAll: string = 'http://localhost:8080/gatekeeper/findAllParked';
  private urlEndPointSave: string = 'http://localhost:8080/gatekeeper/registerEntry';
  private urlEndPointGiveOut: string = 'http://localhost:8080/gatekeeper/giveOut/';
  
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  
  constructor(private http: HttpClient){}
  
  getAllParking(): Observable<ParkingEntity[]> {
    return this.http.get(this.urlEndPointFindAll).pipe(
      map(response => response as ParkingEntity[]),
    );
  }

  registerEntryVehicle(vehicle: VehicleEntity): Observable<VehicleEntity> {
    return this.http.post<VehicleEntity>(this.urlEndPointSave, vehicle, {headers: this.httpHeaders});
  }
}
