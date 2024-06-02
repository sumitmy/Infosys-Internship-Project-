import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-stud-login',
  templateUrl: './stud-login.component.html',
  styleUrl: './stud-login.component.css'
})
export class StudLoginComponent implements OnInit{
  studLoginForm: FormGroup;

  emailPattern: string = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$";
  passwordPattern:string ="^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$";

  constructor(private fb: FormBuilder){
    this.studLoginForm = this.fb.group({
      'email': ['', [Validators.required, Validators.email,Validators.pattern(this.emailPattern)]],
      'password': ['', [Validators.required, Validators.minLength(8),Validators.pattern(this.passwordPattern)]],
      'userID' : ['', [Validators.required, Validators.pattern('^[789]\\d{9}$')]]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.studLoginForm.valid) {
      // Handle form submission logic here, e.g., sending data to server
      console.log(this.studLoginForm.value);
    }
  }
  isInvalid(controlName: string): boolean {
    const control = this.studLoginForm.get(controlName);
    console.log(`Checking validity for ${controlName}:`, control);

    return control ? control.invalid && (control.dirty || control.touched) : false;
  }


  getErrorMessage(controlName: string): string {
    const control = this.studLoginForm.get(controlName);

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
