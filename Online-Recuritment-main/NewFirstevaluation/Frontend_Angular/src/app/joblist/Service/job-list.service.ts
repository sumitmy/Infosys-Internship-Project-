import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company, jobList } from '../Model/jobList.model';

@Injectable({
  providedIn: 'root'
})
export class JobListService {

  url = "http://localhost:8080/jobBysearch";

  constructor(private http: HttpClient) { }

  joblistsearch(search:string) {
    return this.http.get(`${this.url}/${search}`);
  }

  getJobs(searchValue: string|null): Observable<jobList[]> {
    return this.http.get<jobList[]>(`http://localhost:8080/jobsBysearch/${searchValue}`);
  }

  getCompanyByRoleId(roleId: string): Observable<Company> {
    // Assuming there's an endpoint to fetch company by roleId
    return this.http.get<Company>('http://localhost:8080/employer/' + roleId);
  }
}
