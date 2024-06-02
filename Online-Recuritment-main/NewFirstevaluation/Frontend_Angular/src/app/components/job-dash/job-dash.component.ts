import { Component, OnInit } from '@angular/core';
import { JobserviceService } from './Service/jobservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Job } from './Model/Job.model';

@Component({
  selector: 'app-job-dash',
  templateUrl: './job-dash.component.html',
  styleUrl: './job-dash.component.css'
})
export class JobDashComponent implements OnInit {

  jobs: any[] = []; // Replace with your actual type
  selectedJobforedit: any=null;
  JobForm!:FormGroup;
  job!: Job;
  selectedJobfordelete: any=null;


  constructor(private jobservice:JobserviceService,private fb:FormBuilder){}

  ngOnInit() {
    this.loadJobs();
    this.JobForm = this.fb.group({
      roleId: {roleId: ''},
      jobName:['',Validators.required],
      jobId:[''],
      jobSalary:['',Validators.required],
      jobType:['',Validators.required],
      jobDescription:['',Validators.required],
      jobVacancy:['',Validators.required]
    });
  }

  loadJobs() {
    // Fetch jobs from the server
    this.jobservice.getAllJobs().subscribe(data=>{
      this.jobs = data;
    })
  }

  createJob() {
    // Open a form to create a new job
  }

  editJob(job: any) {
    // Open a form to edit the job
    this.selectedJobforedit = job
  }

  deleteJob(id: number) {
    // Delete the job
    console.log(id);
    this.selectedJobfordelete = id;
    console.log(this.selectedJobfordelete);
  }

  onSubmit(){
    console.log(this.JobForm.value)
    this.JobForm.value.roleId.roleId = this.selectedJobforedit.roleId.roleId;
    this.JobForm.value.jobId = this.selectedJobforedit.jobId;
    if(this.JobForm.valid){
      this.jobservice.updateJob(this.JobForm.value).subscribe((response)=>{
        console.log("submitted");
       
        });
        alert("submiited");
        this.loadJobs();
      this.closeModalforEdit();
      this.loadJobs();
    }
  }

  deleteJobbyJobId() {
    console.log(this.selectedJobfordelete)
    this.jobservice.deleteJobByjobId(this.selectedJobfordelete).subscribe((response)=>{
      console.log("submitted");
      
      });
      alert("deleted");
    this.closeModalforDelete();
    this.loadJobs();
  }

  closeModalforDelete():void{
    this.selectedJobfordelete = null;
  }
  closeModalforEdit():void{
    this.selectedJobforedit = null;
  }
  
  isInvalid(controlName: string): boolean {
    const control = this.JobForm.get(controlName);
    return control ? control.invalid && (control.dirty || control.touched) : false;
  }

  getErrorMessage(controlName: string): string {
    const control = this.JobForm.get(controlName);
    if (control && control.errors) {
      if (control.errors['required']) {
        return `${controlName} is required.`;
      } else if (control.errors['email']) {
        return `Invalid email address.`;
      } else if (control.errors['pattern']) {
        return `Invalid ${controlName}.`;
      }
    }
    return '';
  }

}
