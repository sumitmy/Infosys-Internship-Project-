import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from '../../not-scheduled/Model/Appointment.model';

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

 
  getAllScheduled(roleId:any):Observable<Appointment[]>{
    console.log(roleId+"this is service")
    return this.http.get<Appointment[]>(`${this.baseUrl}/getAppointmentAllSet/${roleId}`);
  }
  downloadResume(applicantId: string): Observable<Blob> {
    const url = `${this.baseUrl}/getResume/${applicantId}`;
    return this.http.get(url,{responseType:'blob'});
  }
}
