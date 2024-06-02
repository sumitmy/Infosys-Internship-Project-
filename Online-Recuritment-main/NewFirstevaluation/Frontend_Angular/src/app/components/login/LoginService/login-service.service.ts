import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Email } from '../../Model/email.model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  private baseUrl = 'http://localhost:8080';
  

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
      
  constructor(private http:HttpClient) { }

  checkUserExist(email:Email,roleIdString:string):Observable<any>{ 
    console.log(email+"this is service");
    email.roleId = roleIdString;
    console.log(email);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(`${this.baseUrl}/userlogin`,email,this.httpOptions);
  }

  checkGraduateExist(roleIdString:string,idName:string):Observable<any>{
    console.log("this is roleID form checkgradute"+roleIdString);
    let type = "";
    if(idName=="GRAD"){
      type = "graduate";
    }
    else{
      type = "employer";
    }
    const url = `${this.baseUrl}/exists${type}/${roleIdString}`;
    console.log(url);
    return this.http.get(url);
  }

 
}
