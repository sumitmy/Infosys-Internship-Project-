import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Appointment } from '../Model/Appointment.model';

@Injectable({
  providedIn: 'root'
})
export class NotscheduledService {
  baseUrl = "http://localhost:8080";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private http:HttpClient) { }

  getAllNotScheduled(roleId:any):Observable<Appointment[]>{
    return this.http.get<Appointment[]>(`${this.baseUrl}/getAppointmentAllNotSet/${roleId}`);
  }

 
  downloadResume(applicantId: string): Observable<Blob> {
    const url = `${this.baseUrl}/getResume/${applicantId}`;
    return this.http.get(url,{responseType:'blob'});
  }
  saveAppointment(appoint:Appointment){
    appoint.date = appoint.date.toString();
    console.log(appoint.date);
    console.log(typeof appoint.date);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(`${this.baseUrl}/saveappointment/${appoint.applicantId}`,appoint,this.httpOptions);
  }

  rejectAppointment(applicantId:string){
    return this.http.delete(`${this.baseUrl}/rejectAppointment/${applicantId}`)
  }

}
