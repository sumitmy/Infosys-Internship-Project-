import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployerregistrationserviceService } from './Services/employerregistrationservice.service';

@Component({
  selector: 'app-emp-register',
  templateUrl: './emp-register.component.html',
  styleUrl: './emp-register.component.css'
})
export class EmpRegisterComponent implements OnInit {
  empRegisterForm!: FormGroup;
  roleIdString: string | null = null;

  constructor(private formBuilder: FormBuilder,private router:ActivatedRoute,
    private employerservice:EmployerregistrationserviceService,private route:Router
  ) { }

  ngOnInit(): void {

    this.router.paramMap.subscribe(params=>{
      this.roleIdString = params.get('roleIdString');
      console.log('RoleIdString:',this.roleIdString);
    });
    
    this.empRegisterForm = this.formBuilder.group({
      roleInCompany: ['', Validators.required],
      companyName: ['', Validators.required],
      companyType: ['', Validators.required],
      companyDescription: ['', Validators.required],
      companyAddress: ['', Validators.required],
      companySize: ['', Validators.required],
      roleId:{
        roleId:[this.roleIdString]}

    })

  }

  // Helper method to check if a form control is invalid
  isInvalid(controlName: string) {
    const control = this.empRegisterForm.get(controlName);
    return control?.invalid && (control.dirty || control.touched);
  }

  // Helper method to get error messages for form controls
  getErrorMessage(controlName: string) {
    const control = this.empRegisterForm.get(controlName);
    if (control?.hasError('required')) {
      return 'This field is required';
    }
    // You can add more specific error messages for different validators if needed
    return '';
  }

  // Method to handle form submission
  onSubmit() {
    if (this.empRegisterForm.valid) {
      // Perform form submission actions here
      console.log(this.empRegisterForm.value);
      this.employerservice.saveemployer(this.empRegisterForm.value).subscribe(Response=>{
        if(Response){
          alert("successful")
        }
        
      })
      this.route.navigate([`job-register/${this.roleIdString}`]);
      console.log(this.roleIdString);
      
    } else {
      // Handle form validation errors here
      console.log('Form is invalid');
    }
  }
  
}
