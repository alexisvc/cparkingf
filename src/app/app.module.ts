import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RegisterVehicleComponent } from './components/register-vehicle/register-vehicle.component';
import { ParkingComponent } from './components/parking/parking.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterVehicleComponent,
    ParkingComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
