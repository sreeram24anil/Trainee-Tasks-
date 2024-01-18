import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HotelComponent } from './hotel/hotel.component';
import { BusComponent } from './bus/bus.component';
import { CarComponent } from './car/car.component';
import { FlightComponent } from './flight/flight.component';



const routes: Routes = 
[
  { path: "home", component:  HomeComponent },
  {path: "hotel", component: HotelComponent},
  {path: "bus", component: BusComponent},
  {path: "car", component: CarComponent},
  {path: "flight", component: FlightComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
