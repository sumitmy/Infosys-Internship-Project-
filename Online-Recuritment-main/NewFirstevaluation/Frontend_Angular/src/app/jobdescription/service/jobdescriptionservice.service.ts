import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobdescriptionserviceService {
  private baseUrl = 'http://localhost:8080';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private http:HttpClient) { 
  }

  getJobDescription(jobId:number):Observable<any>{
    console.log("this is getting the job descirpiton")
    return this.http.get<any>(`${this.baseUrl}/jobsByIntegerId/${jobId}`);
  }

  getCompanyDescription(roleId:string):Observable<any>{
    console.log("this is going to employer db to get the company");
    console.log(roleId);
    return this.http.get<any>(`${this.baseUrl}/employer/${roleId}`);
  }

}
