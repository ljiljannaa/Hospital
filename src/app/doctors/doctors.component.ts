import { Component, OnInit } from '@angular/core';
import { DoctorList } from '../model/doctor-list.model';
import { DoctorsService } from '../services/doctors.service';
import { SpecialitiesService } from '../services/specialities.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {

  doctorList: DoctorList = new DoctorList();
  specialities: string[] = [];

  queryParams = {
    filter : {
      specialty: "",
      name: "",
      lastName: "",
    }
  }

  constructor(private service: DoctorsService, private specialitiesService: SpecialitiesService) { }

  ngOnInit(): void {
    this.getDoctors();
    this.getSpecialities();
  }

  getDoctors() : void {
    this.service.getDoctors(this.queryParams).subscribe((data:DoctorList) => {
      this.doctorList = data;
    })
  }

  getSpecialities() : void {
    this.specialitiesService.getSpecialities().subscribe((data: string[]) => {
      this.specialities = data;
    })
  }

  
}
