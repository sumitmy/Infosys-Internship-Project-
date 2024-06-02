import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminloginService } from './Services/adminlogin.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent implements OnInit{

  adminLoginForm: FormGroup;

  emailPattern: string = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$";
  passwordPattern:string ="^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$";

  constructor(private fb: FormBuilder,private adminservice:AdminloginService,private route:Router){
    this.adminLoginForm = this.fb.group({
      'email': ['', [Validators.required, Validators.email,Validators.pattern(this.emailPattern)]],
      'password': ['', [Validators.required]]
      // 'userID' : ['', [Validators.required, Validators.pattern('^[789]\\d{9}$')]]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.adminLoginForm.valid) {
      // Handle form submission logic here, e.g., sending data to server
      this.adminservice.checkAdminExist(this.adminLoginForm.value).subscribe(Response=>{
        if(Response===true){
          alert("login sucessful")
        this.route.navigate([`/admin-dash`]);
        }
        else{
          alert("incorrect password or email")
        }
      });
    }
  }
  isInvalid(controlName: string): boolean {
    const control = this.adminLoginForm.get(controlName);
    console.log(`Checking validity for ${controlName}:`, control);

    return control ? control.invalid && (control.dirty || control.touched) : false;
  }


  getErrorMessage(controlName: string): string {
    const control = this.adminLoginForm.get(controlName);

    if (!control) {
      console.log(`Control ${controlName} not found.`);
      return '';
    }

    if (control.hasError('required')) {
      return `${controlName.charAt(0).toUpperCase() + controlName.slice(1)} is required.`;
    }
    if(control.hasError('pattern')){
      if(controlName==="email"){
        return "Invalid email pattern"
      }
    }

    if(control.hasError('pattern')){
      if(controlName==='password'){
        return "Password must contain at least one uppercase letter, one lowercase letter, one digit, one special character, and be at least 8 characters long."
      }
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
