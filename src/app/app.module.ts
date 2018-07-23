import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RegisterVehicleComponent } from './components/register-vehicle/register-vehicle.component';
import { ParkingComponent } from './components/parking/parking.component';
import { ParkingService } from './components/services/parking.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: 'home', component: RegisterVehicleComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterVehicleComponent,
    ParkingComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ParkingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
