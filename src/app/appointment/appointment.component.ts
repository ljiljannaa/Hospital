import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbDateStruct, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { Appoinment } from '../model/appoinment.model';
import { Doctor } from '../model/doctor.model';
import { AppointmentService } from '../services/appointment.service';
import { DoctorsService } from '../services/doctors.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  doctorId: number = 0;
  appoinment: Appoinment = new Appoinment();
  doctor: Doctor = new Doctor();
  
  constructor(private route: ActivatedRoute, private service: DoctorsService, private appointmentService: AppointmentService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((data:any) => {
      this.doctorId = data['id'];
      this.getOne();
    })
  }

  create() : void {
    let date = new Date(this.appoinment.day.year, this.appoinment.day.month - 1, this.appoinment.day.day);
    let dayOfTheWeek = date.getDate();
    if(dayOfTheWeek === 6 || dayOfTheWeek === 0) {
      alert("Please choose a work day");
      return;
    }

    if(this.doctor.schedule.monday.isWorkingHour(this.appoinment.hour.hour, this.appoinment.hour.minute) == false && dayOfTheWeek == 1) {
      alert("Please choose working hours");
      return;
    }
    if(this.doctor.schedule.tuesday.isWorkingHour(this.appoinment.hour.hour, this.appoinment.hour.minute) == false && dayOfTheWeek == 2) {
      alert("Please choose working hours");
      return;
    }
    if(this.doctor.schedule.wednesday.isWorkingHour(this.appoinment.hour.hour, this.appoinment.hour.minute) == false && dayOfTheWeek == 3) {
      alert("Please choose working hours");
      return;
    }
    if(this.doctor.schedule.thursday.isWorkingHour(this.appoinment.hour.hour, this.appoinment.hour.minute) == false && dayOfTheWeek == 4) {
      alert("Please choose working hours");
      return;
    }
    if(this.doctor.schedule.friday.isWorkingHour(this.appoinment.hour.hour, this.appoinment.hour.minute) == false && dayOfTheWeek == 5) {
      alert("Please choose working hours");
      return;
    }

    this.appointmentService.post(this.appoinment).subscribe((data: Appoinment) => {
      this.router.navigateByUrl("/doctors");
    }, error => {
      alert("Error");
    })
    
  }

  getOne() : void {
    this.service.getOne(this.doctorId).subscribe((data: Doctor) => {
      this.doctor = data;
    })
  }


  
}
