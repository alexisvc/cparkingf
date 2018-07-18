import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ParkingEntity } from '../services/parkingEntity';

@Injectable()
export class ParkingService {
  private urlEndPoint: string = 'http://localhost:8080/gatekeeper/findAllParked';
  // private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  
  constructor(private http: HttpClient){}
  
  getAllParking(): Observable<ParkingEntity[]> {
    return this.http.get(this.urlEndPoint).pipe(
      map(response => response as ParkingEntity[]),
    );    
  }
}
