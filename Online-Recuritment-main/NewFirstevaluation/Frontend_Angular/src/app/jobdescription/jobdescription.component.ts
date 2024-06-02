import { Component, OnInit } from '@angular/core';
import { JobDescription } from './Model/jobDescription.model';
import { JobdescriptionserviceService } from './service/jobdescriptionservice.service';
import { companyDescription } from './Model/companyDescription.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-jobdescription',
  templateUrl: './jobdescription.component.html',
  styleUrl: './jobdescription.component.css'
})
export class JobdescriptionComponent implements OnInit {
  
  jobDescriptionData : JobDescription | undefined;
  companyDescriptionData :companyDescription | undefined

  jobId!:number;
 
  studentId:string | undefined;
  

  constructor(private jobdescriptionservice:JobdescriptionserviceService,private router:ActivatedRoute,
    private route:Router
  ){
  }

  ngOnInit(): void {

    this.router.paramMap.subscribe(params=>{
      this.studentId = String(params.get('roleIdString'));
    });


    this.router.paramMap.subscribe(params=>{
      this.jobId = Number(params.get('jobId'));
    });


    // this is for job details
    this.jobdescriptionservice.getJobDescription(this.jobId).subscribe(data=>{
      this.jobDescriptionData=data;
      const employerId = data.roleId.roleId;
      
      this.jobdescriptionservice.getCompanyDescription(employerId).subscribe(data=>{
        this.companyDescriptionData = data;
      });
    }
    );
  }

  Apply(){
    console.log(this.jobId);
    console.log(this.studentId)
    this.route.navigate([`/job-seeker/${this.studentId}/${this.jobId}`])
  }
  

  

}
