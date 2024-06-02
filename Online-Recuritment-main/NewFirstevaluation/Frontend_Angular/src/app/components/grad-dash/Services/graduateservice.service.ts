import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { College, Graduate, User } from '../Models/graduate.model';

@Injectable({
  providedIn: 'root'
})
export class GraduateserviceService {
 

  baseUrl = "http://localhost:8080";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  
  constructor(private http:HttpClient) { }

  getListOfGraduates():Observable<Graduate[]>{
    return this.http.get<Graduate[]>(`${this.baseUrl}/allgraduate`)
  }

  getUserbyroleId(roleId:string):Observable<any>{
    return this.http.get<User>(`${this.baseUrl}/getUserbyRoleId/${roleId}`);
  }

  getCollegeByroleId(roleId: string):Observable<any> {
      return this.http.get<College>(`${this.baseUrl}/college/${roleId}`);
  }

  updateUser(user:User,roleId:string):Observable<any>{
    console.log(user+"thisfadsfasf")
    console.log(roleId+"dffasfadsf")
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put(`${this.baseUrl}/userupdate/${roleId}`,user,this.httpOptions);
  }
  updateGraduate(graduate:Graduate,roleId:string):Observable<any>{
    console.log(graduate.roleId.roleId)
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put(`${this.baseUrl}/updategraduate/${roleId}`,graduate,this.httpOptions);
  }
  updateCollege(college:College,roleId:string):Observable<any>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put(`${this.baseUrl}/updatecollege/${roleId}`,college,this.httpOptions);
  }

  deleteUserByRole(id:string){
    console.log(id+"this is inside the dleete");
    return this.http.delete(`${this.baseUrl}/userdelete/${id}`);
  }

}
