import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { JobSeeker } from '../Model/jobseeker.model';

@Injectable({
  providedIn: 'root'
})
export class JobseekerserviceService {
  private baseUrl = 'http://localhost:8080';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private http:HttpClient) { 
  }

  getStudentId(roleId:string):Observable<number>{
    return this.http.get<number>(`${this.baseUrl}/getstudentid/${roleId}`)
  }

  savejobseeker(jobseeker:JobSeeker):Observable<any>{
    
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(`${this.baseUrl}/jobseeker`,jobseeker);
  }

  uploadFile(file:FormData,applicationId:string):Observable<any>{
  
    return this.http.post(`${this.baseUrl}/jobseeker/${applicationId}`, file);
  }

 
}

