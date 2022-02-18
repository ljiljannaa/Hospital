import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentComponent } from './appointment/appointment.component';
import { AboutComponent } from './core/about/about.component';
import { HomeComponent } from './core/home/home.component';
import { DoctorDetailsComponent } from './doctors/doctor-details/doctor-details.component';
import { DoctorsComponent } from './doctors/doctors.component';

const routes: Routes = [
  {path:"home", component: HomeComponent},
  {path: "doctors", component: DoctorsComponent, children: [{
    path:":id", component: DoctorDetailsComponent
  }]},
  {path: "appointment/:id", component: AppointmentComponent},
  {path: "about", component: AboutComponent},
  {path: "", redirectTo: "home", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
