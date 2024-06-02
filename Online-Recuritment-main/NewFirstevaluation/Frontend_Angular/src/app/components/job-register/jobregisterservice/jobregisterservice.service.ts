import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Job } from '../Model/Job.model';

@Injectable({
  providedIn: 'root'
})
export class JobregisterserviceService {

  private baseUrl = 'http://localhost:8080';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http:HttpClient) { 
  }

  savejob(job:Job){
    console.log(job);
    if (job.roleId && typeof job.roleId.roleId !== 'string') {
      job.roleId.roleId = String(job.roleId.roleId);
    }
    
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(`${this.baseUrl}/jobs`,job,this.httpOptions);
  }
}
