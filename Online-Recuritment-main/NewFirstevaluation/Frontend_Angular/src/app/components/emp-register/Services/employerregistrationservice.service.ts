import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employer } from '../../Model/employer.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployerregistrationserviceService {

  private baseUrl = 'http://localhost:8080';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http:HttpClient) { 
  }

  saveemployer(employer:Employer):Observable<any>{
    console.log(employer.roleId.roleId);
    if (employer.roleId && typeof employer.roleId.roleId !== 'string') {
      employer.roleId.roleId = String(employer.roleId.roleId);
    }
    
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(`${this.baseUrl}/employer`,employer,this.httpOptions);
  }

}
