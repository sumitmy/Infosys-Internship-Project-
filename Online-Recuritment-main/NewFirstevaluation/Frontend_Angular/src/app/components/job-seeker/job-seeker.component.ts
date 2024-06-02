import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { JobseekerserviceService } from './Service/jobseekerservice.service';


@Component({
  selector: 'app-job-seeker',
  templateUrl: './job-seeker.component.html',
  styleUrl: './job-seeker.component.css'
})
export class JobSeekerComponent {
  


  jobSeekerForm!:FormGroup;

    emailPattern: string = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$";
  roleIdString!: string;
  jobId!: number;
  studentId!:number;
  selectedFile!: File;

    constructor(private fb:FormBuilder,private router:ActivatedRoute,private route:Router,private jobseekerservice:JobseekerserviceService){
      
    }

    ngOnInit(): void {
      this.router.paramMap.subscribe(params=>{
        this.roleIdString = String(params.get('roleIdString'));
      });
  
  
      this.router.paramMap.subscribe(params=>{
        this.jobId = Number(params.get('jobId'));
      });

      this.jobseekerservice.getStudentId(this.roleIdString).subscribe(data=>{
        console.log(data);
        this.studentId = Number(data);
        console.log(this.studentId)
        
      })

      this.jobSeekerForm = this.fb.group({
        fullName : ['', [Validators.required, Validators.minLength(3),Validators.maxLength(50)]],
        email: ['', [Validators.required, Validators.email,Validators.pattern(this.emailPattern)]],
        phone : ['', [Validators.required, Validators.pattern('^[789]\\d{9}$'), Validators.minLength(10), Validators.maxLength(10)]],
        yearOfPassing : ['', [Validators.required]],
        cgpa : ['', Validators.required],
        language : ['', Validators.required],
        keySkill : ['', Validators.required],
        project : ['' , Validators.required],
        
        areaOfInterest : ['', Validators.required],
        job:{
          jobId:this.jobId
        },
        graduate:{
          studentId:this.studentId,
          roleId:{
            roleId:this.roleIdString
          },
        }  
      });
    }

    onFileChange(event: any): void {
      const file = event.target.files[0];
      if (file && file.type === 'application/pdf') {
        this.selectedFile = file;
      } else {
        alert('Please select a valid PDF file.');
      }
    }

    onSubmit(): void {
      if (this.jobSeekerForm.valid) {
        console.log(this.roleIdString)
        this.jobSeekerForm.value.graduate.studentId = this.studentId;
        console.log(this.jobId)
        console.log("this is studentId:"+this.studentId)
        console.log(this.jobSeekerForm.value);
        const applicantId = this.roleIdString+this.jobId;
        const formData:FormData = new FormData();
        formData.append('file',this.selectedFile);

      this.jobseekerservice.savejobseeker(this.jobSeekerForm.value).subscribe(Response=>{
        if(Response===true){
          this.jobseekerservice.uploadFile(formData,applicantId).subscribe((response)=>{
            alert("fileUploaded");
          },
          (error)=>{
            console.log("err")
            alert("Internal Server Error OR Duplicate Entry")
          }
        );
        }
      },
      error=>{
        alert("Internal Server Error OR Duplicate Entry")
      }
    );
      alert("submitted")

        this.route.navigate([`/gradhome/${this.roleIdString}`])
      }

    }

    isInvalid(controlName: string): boolean {
      const control = this.jobSeekerForm.get(controlName);
    
      return control ? control.invalid && (control.dirty || control.touched) : false;
    }



    getErrorMessage(controlName: string): string {
      const control = this.jobSeekerForm.get(controlName);

      if (!control) {
        // console.log(`Control ${controlName} not found.`);
        return '';
      }

      if(control.hasError('pattern')){
        if(controlName==='password'){
          return "Password must contain at least one uppercase letter, one lowercase letter, one digit, one special character, and be at least 8 characters long."
        }
      }

      if(control.hasError('pattern')){
        if(controlName==="email"){
          return "Invalid email pattern"
        }
      }

      if (control.hasError('pattern')) {

          return 'Invalid phone number format. Please enter a 10-digit number.';
      }

      if (control.hasError('required')) {
        return `${controlName.charAt(0).toUpperCase() + controlName.slice(1)} is required.`;
      }

      if (control.hasError('email')) {
        return 'Invalid email format';
      }

      if (control.errors?.['minlength']) {
        return `Minimum length should be ${(control.errors as any).minlength.requiredLength}`;
      }



      return '';
    }


}
