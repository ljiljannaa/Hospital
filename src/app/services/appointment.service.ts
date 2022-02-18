import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appoinment } from '../model/appoinment.model';
import {map} from 'rxjs/operators';


const baseUrl = "http://localhost:3000/api/appointments";
@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private httpClient: HttpClient) { }

  post(appoinment: Appoinment) : Observable<Appoinment> {
    return this.httpClient.post(baseUrl, appoinment).pipe(map((x:any) => {
      return new Appoinment(x);
    }))
  }
}


