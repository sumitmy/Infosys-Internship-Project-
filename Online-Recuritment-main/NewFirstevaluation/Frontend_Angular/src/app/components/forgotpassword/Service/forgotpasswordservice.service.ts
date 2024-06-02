import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ForgotPassword } from '../Model/forgotpassword.model';

@Injectable({
  providedIn: 'root'
})
export class ForgotpasswordserviceService {
  private baseUrl = 'http://localhost:8080';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private http:HttpClient) { 
  }

  changePassword(forgotpassword:ForgotPassword){
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put(`${this.baseUrl}/updatepassword`,forgotpassword,this.httpOptions);
  }
}
