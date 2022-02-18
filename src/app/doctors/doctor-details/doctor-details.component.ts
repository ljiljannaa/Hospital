import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Doctor } from 'src/app/model/doctor.model';
import { DoctorsService } from 'src/app/services/doctors.service';

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.css']
})
export class DoctorDetailsComponent implements OnInit {


  doctorId: number = 0;
  doctor: Doctor = new Doctor();

  @Input()
  hideButton: boolean = false;
  constructor(private service: DoctorsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: any) => {
      this.doctorId = data['id'];
      this.getOne();
    })
  }

  getOne() : void {
    this.service.getOne(this.doctorId).subscribe((data: Doctor) => {
      this.doctor = data;
    })
  }

}
