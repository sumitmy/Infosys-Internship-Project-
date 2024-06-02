import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employer, User } from '../Model/Employer.model';

@Injectable({
  providedIn: 'root'
})
export class EmployerserviceService {

  baseUrl = "http://localhost:8080";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private http:HttpClient) { }

  getListOfEmployer():Observable<Employer[]>{
    return this.http.get<Employer[]>(`${this.baseUrl}/allemployer`);
  }
  getUserbyroleId(roleId:string):Observable<any>{
    return this.http.get<User>(`${this.baseUrl}/getUserbyRoleId/${roleId}`);
  }

  updateUser(user:User,roleId:string):Observable<any>{
    console.log(user+"thisfadsfasf")
    console.log(roleId+"dffasfadsf")
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put(`${this.baseUrl}/userupdate/${roleId}`,user,this.httpOptions);
  }

  updateEmployer(employer:Employer,roleId:string):Observable<any>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put(`${this.baseUrl}/updateemployer/${roleId}`,employer,this.httpOptions);
  }

  deleteUserByRole(id:string){
    console.log(id+"this is inside the dleete");
    return this.http.delete(`${this.baseUrl}/userdelete/${id}`);
  }
}
