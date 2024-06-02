import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Email } from '../../Model/email.model';

@Injectable({
  providedIn: 'root'
})
export class AdminloginService {

  private baseUrl = 'http://localhost:8080';
  

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
      
  constructor(private http:HttpClient) { }

  checkAdminExist(admin:any):Observable<any>{ 
    
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(`${this.baseUrl}/checkadminlogin`,admin,this.httpOptions);
  }
}
