import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ForgotpasswordserviceService } from './Service/forgotpasswordservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrl: './forgotpassword.component.css'
})
export class ForgotpasswordComponent {
  forgotpasswordform: FormGroup;
  hide = true; // To toggle password visibility
  errorMessage: string | null = null;
  emailPattern: string = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$";
  passwordPattern:string ="^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$";


  constructor(private fb: FormBuilder,private forgotPasswordService:ForgotpasswordserviceService,
    private route:Router
  ) {
    this.forgotpasswordform = this.fb.group({
      'email': [null, [Validators.required, Validators.email,Validators.pattern(this.emailPattern)]],
      'currentPassword': [null, [Validators.required,Validators.pattern(this.passwordPattern)]],
      'newPassword': [null, [Validators.required, Validators.minLength(8),Validators.pattern(this.passwordPattern)]],
      'confirmPassword': [null, [Validators.required,Validators.pattern(this.passwordPattern)]]
    });

    console.log('Initial form state:', this.forgotpasswordform);
  }

  onSubmit() {
    if (this.forgotpasswordform.valid) {
      console.log('Form submitted with values:', this.forgotpasswordform.value);
      this.forgotPasswordService.changePassword(this.forgotpasswordform.value).subscribe(Response =>{
        if(Response){
          alert("the password is changed")
          this.route.navigate(['/login']);
        }
      },
      (error)=>{
        alert("Internal Server Error");
      }
    )
    } 
  }

  isInvalid(controlName: string): boolean {
    const control = this.forgotpasswordform.get(controlName);

    console.log(`Checking validity for ${controlName}:`, control);

    return control ? control.invalid && (control.dirty || control.touched) : false;
  }

  getErrorMessage(controlName: string): string {
    const control = this.forgotpasswordform.get(controlName);

    if (!control) {
      console.log(`Control ${controlName} not found.`);
      return '';
    }

    if(control.hasError('pattern')){
      if(controlName==='currentPassword'|| controlName==="newPassword" || controlName==="confirmPassword"){
        return "Password must contain at least one uppercase letter, one lowercase letter, one digit, one special character, and be at least 8 characters long."
      }
    }

    if (control.hasError('required')) {
      return `${controlName.charAt(0).toUpperCase() + controlName.slice(1)} is required.`;
    }

    if(control.hasError('pattern')){
      if(controlName==="email"){
        return "Invalid email pattern"
      }
    }

    if (control.hasError('email')) {
      return 'Please provide a valid email.';
    }

    if (control.errors?.['minlength']) {
      return `Password must be at least ${control.errors['minlength'].requiredLength} characters long.`;
    }

    return '';
  }
}
