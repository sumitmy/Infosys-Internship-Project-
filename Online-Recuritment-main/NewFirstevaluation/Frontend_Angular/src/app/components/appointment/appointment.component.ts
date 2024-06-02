import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.css'
})
export class AppointmentComponent implements OnInit{

  // selectedJob: string = '';
// nationalities: string[] =  ['Software Developer', 'Data Scientist', 'Cybersecurity Analyst', 'UX/UI Designer',
//    'Systems Administrator', 'Network Engineer', 'IT Project Manager', 'Cloud Architect'];





  appointForm!:FormGroup;

    emailPattern: string = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$";

    constructor(private fb:FormBuilder){
      this.appointForm = this.fb.group({
        'name' : ['', [Validators.required, Validators.minLength(3),Validators.maxLength(50)]],
        'email': ['', [Validators.required, Validators.email,Validators.pattern(this.emailPattern)]],
        'phone' : ['', [Validators.required, Validators.pattern('^[789]\\d{9}$'), Validators.minLength(10), Validators.maxLength(10)]],
        'yearOfPassing' : ['', [Validators.required, Validators.minLength(2), Validators.maxLength(4)]],
        'percentage' : ['', Validators.required],
        'language' : ['', Validators.required],
        'keySkill' : ['', Validators.required],
        'project' : ['' , Validators.required],
        'cgpa': ['' , Validators.required],
        'resume' : ['', Validators.required],
        'selectJob': ['', Validators.required],
        'selectSlot' : ['', Validators.required]

      });
    }

    ngOnInit(): void {

    }

    onSubmit(): void {
      if (this.appointForm.valid) {
        // Handle form submission logic here, e.g., sending data to server
        console.log(this.appointForm.value);
      }
    }

    isInvalid(controlName: string): boolean {
      const control = this.appointForm.get(controlName);
      console.log(`Checking validity for ${controlName}:`, control);

      return control ? control.invalid && (control.dirty || control.touched) : false;
    }



    getErrorMessage(controlName: string): string {
      const control = this.appointForm.get(controlName);

      if (!control) {
        console.log(`Control ${controlName} not found.`);
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
