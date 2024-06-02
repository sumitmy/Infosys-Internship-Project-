import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { College } from '../Model/college.model';
import { Student } from '../../Model/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentregisterServiceService {
  private baseUrl = 'http://localhost:8080';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private http:HttpClient) { 
  }
  savestudent(student:Student):Observable<any>{
    if (student.roleId && typeof student.roleId.roleId !== 'string') {
      student.roleId.roleId = String(student.roleId.roleId);
    }
    
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(`${this.baseUrl}/graduate`,student,this.httpOptions);
  }

  savecollege(college:College):Observable<any>{

    if (college.roleId && typeof college.roleId.roleId !== 'string') {
      college.roleId.roleId = String(college.roleId.roleId);
    }
    console.log(college)
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(`${this.baseUrl}/college`,college,this.httpOptions);
  }
}
