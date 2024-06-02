import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmailService } from '../../email.service';
import { RegistrationserviceService } from '../../registrationservice.service';


@Component({
  selector: 'app-email-verification',
  templateUrl: './email-verification.component.html',
  styleUrl: './email-verification.component.css'
})
export class EmailVerificationComponent {
  emailForm: FormGroup;
  formData: any;

  hide = true; // To toggle password visibility
  emailPattern: string = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$";
 

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private otpService: EmailService,
    private registrationService:RegistrationserviceService
  ) {
    this.emailForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      otp: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]]
    });
    
    this.formData = this.router.getCurrentNavigation()?.extras.state?.['formData'];
  }

  ngOnInit(): void {
    if (this.formData) {
      this.emailForm.patchValue({
        email: this.formData.email
      });
    }
    
  }
  
  onConfirmEmail(): void {
    if (this.emailForm.valid) {
      const email = this.emailForm.get('email')?.value;
      const otp = this.emailForm.get('otp')?.value;

      this.otpService.verifyOtp(email, otp).subscribe(
        (        response: { message: any; }) => {
          if(response){
          console.log(response.message);
          const user = this.formData;
          console.log(user);
          console.log(this.formData)
          this.registrationService.registerUser(user).subscribe(
              response =>{
                if(response==="Created"){
                  alert("submitted");
                }
                else{
                  alert("Internal Error")
                }
              } 
            );
          alert("Otp verified");
          this.router.navigateByUrl("/home");
          }
          else {
            alert("not valid ")
          }
          
        },
        (        error: any) => {
          console.error('Failed to verify OTP:', error);
          alert('Failed to verify OTP. Please try again.');
        }
      );

    


    } else {
      console.log('Invalid form');
    }
  }

  onResendOtp(): void {
    const email = this.emailForm.get('email')?.value;

    this.otpService.generateOtp(email).subscribe(
      (      response: { message: any; }) => {
        console.log(response.message);
        alert('OTP resent successfully.');
      },
      (      error: any) => {
        console.error('Failed to resend OTP:', error);
        alert('Failed to resend OTP. Please try again.');
      }
    );
  }

  isInvalid(controlName: string): boolean {
    const control = this.emailForm.get(controlName);
    console.log(`Checking validity for ${controlName}:`, control);

    return control ? control.invalid && (control.dirty || control.touched) : false;
  }


  getErrorMessage(controlName: string): string {
    const control = this.emailForm.get(controlName);

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
 

