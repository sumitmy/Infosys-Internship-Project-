import { Component } from '@angular/core';
import { JobListService } from './Service/job-list.service';
import { HttpClient } from '@angular/common/http';
import { jobList } from './Model/jobList.model';
import { FormControl, FormControlName } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-joblist',
  templateUrl: './joblist.component.html',
  styleUrl: './joblist.component.css'
})
export class JoblistComponent {

  searchValue:string | null = null;
  jobs:jobList[] = [];
  roleIdString: string | null = null;
  searchredirect :string | null = null;
  constructor(private http: HttpClient,private joblistservice:JobListService,private router:ActivatedRoute
    ,private route:Router
  ) { }
  ngOnInit(): void {
    this.router.paramMap.subscribe(params=>{
      this.roleIdString = params.get('roleIdString');
      console.log('RoleIdString:',this.roleIdString);
    });

    this.router.paramMap.subscribe(params=>{
      this.searchValue = params.get('searchvalue');
      console.log('searchvalue:',this.searchValue);
    });
    
    if(this.searchValue!=null){
      this.search();
    }
    
  }
  getCompaniesForJobs() {
    this.jobs.forEach(job => {
        this.joblistservice.getCompanyByRoleId(job.roleId.roleId).subscribe(company => {
            // Assign company details to respective job
            job.companyName = company.companyName;
            job.companyAddress = company.companyAddress;
        });
    });

  }

  search(){
    this.joblistservice.getJobs(this.searchValue).subscribe(jobs=>{
    this.jobs = jobs;
    this.getCompaniesForJobs();}
   );
  }

  Apply(jobId:number){
    if(this.roleIdString==null || this.roleIdString==='null'){
      alert("Please Login to apply")
      this.route.navigate(['/login']);
    }
   else if(this.roleIdString.startsWith("EMP")){
    alert("this is only to apply for Job Applier")
   }
    else{
      this.route.navigate([`/jobdescription/${this.roleIdString}/${jobId}`]);
    }
  }
}