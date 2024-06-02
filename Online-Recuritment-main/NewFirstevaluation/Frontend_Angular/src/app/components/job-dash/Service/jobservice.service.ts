import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Job } from '../Model/Job.model';


@Injectable({
  providedIn: 'root'
})
export class JobserviceService {
  
  baseUrl = "http://localhost:8080";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private http:HttpClient) { }

  getAllJobs():Observable<Job[]>{
    return this.http.get<Job[]>(`${this.baseUrl}/alljobs`);
  }

  updateJob(job:Job):Observable<any>{
    console.log(job);
    console.log(job.jobId)
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put(`${this.baseUrl}/updatejob/${job.jobId}`,job,this.httpOptions);
  }

  deleteJobByjobId(jobId: number) {
    console.log(jobId+"this is from delete")
    return this.http.delete(`${this.baseUrl}/deletejobbyId/${jobId}`);
  }
  
}
