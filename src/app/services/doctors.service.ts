import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DoctorList } from '../model/doctor-list.model';
import {map} from 'rxjs/operators';
import { Doctor } from '../model/doctor.model';


const baseUrl = "http://localhost:3000/api/doctors";
@Injectable({
  providedIn: 'root'
})
export class DoctorsService {

  constructor(private httpClient: HttpClient) { }

  getDoctors(params?:any) : Observable<DoctorList> {
    let queryParams = {};

    if(params) {
      queryParams = {
        params: new HttpParams()
        .set("filter", params.filter && JSON.stringify(params.filter))
      }
    }
    return this.httpClient.get(baseUrl, queryParams).pipe(map((x:any) => {
      return new DoctorList(x);
    }))
  }

  getOne(doctorId: number) : Observable<Doctor> {
    return this.httpClient.get(`${baseUrl}/${doctorId}`).pipe(map((x:any) => {
      return new Doctor(x);
    }))
  }
}
