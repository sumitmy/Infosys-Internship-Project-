import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { User } from './components/Model/user.model';

@Injectable({
  providedIn: 'root'
})
export class RegistrationserviceService {
  private baseUrl = 'http://localhost:8080';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
      
  constructor(private http:HttpClient) { }

  registerUser(user:User):Observable<any>{
    console.log(user);
    console.log("this is to db")
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(`${this.baseUrl}/user`,user,this.httpOptions);
  }
}
