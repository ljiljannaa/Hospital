import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';


const baseUrl = "http://localhost:3000/api/specialties";
@Injectable({
  providedIn: 'root'
})
export class SpecialitiesService {

  
  constructor(private httpClien: HttpClient) { }

  getSpecialities() : Observable<string[]> {
  

    return this.httpClien.get(baseUrl).pipe(map((x:any) => {
      return  x as string[];
    }))
  }

}
