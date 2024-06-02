import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceService } from './LoginService/login-service.service';
import { faL } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  hide = true; // To toggle password visibility
  emailPattern: string = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$";
  passwordPattern:string ="^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$";
  roleIdString: any;


  constructor(private fb: FormBuilder,private router:Router,private loginservice:LoginServiceService) {
    this.loginForm = this.fb.group({
      'email': [null, [Validators.required, Validators.email,Validators.pattern(this.emailPattern)]],
      'password': [null, [Validators.required, Validators.minLength(8),Validators.pattern(this.passwordPattern)]],
      'idName': ['GRAD',Validators.required], 
      'roleId': ['',Validators.required]
    });
  }

  ngOnInit(): void {


  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      // Handle form submission logic here, e.g., sending data to server
     console.log(this.loginForm.value);
     const roleIdString = this.loginForm.value.idName+this.loginForm.value.roleId;
     
     console.log(roleIdString)

     this.loginservice.checkUserExist(this.loginForm.value, roleIdString).subscribe(response => {
      if (response === true) {
        alert("Login Successful");
        this.loginservice.checkGraduateExist(roleIdString,this.loginForm.value.idName).subscribe(Response => {
          console.log(Response);
          if (Response === false) {
            if (this.loginForm.value.idName === "EMP") {
              this.router.navigate(['/emp-register', roleIdString]);
            } else if (this.loginForm.value.idName === "GRAD") {
              this.router.navigate(['/stud-register', roleIdString]);
            }
          } else {
            if(this.loginForm.value.idName === "EMP"){
              this.router.navigate(['/home',roleIdString])
            }
            else{
            this.router.navigate(['/gradhome',roleIdString]);
            }
          }
        });
      } else {
        alert("Invalid User Details or Not Registered");
      }
    });

     

    }
  }
  isInvalid(controlName: string): boolean {
    const control = this.loginForm.get(controlName);
    // console.log(`Checking validity for ${controlName}:`, control);

    return control ? control.invalid && (control.dirty || control.touched) : false;
  }


  getErrorMessage(controlName: string): string {
    const control = this.loginForm.get(controlName);

    if (!control) {
      console.log(`Control ${controlName} not found.`);
      return '';
    }

    if (control.hasError('required')) {
      return `${controlName.charAt(0).toUpperCase() + controlName.slice(1)} is required.`;
    }
    if (control.hasError('pattern')) {
      if (controlName === "email") {
        return "Invalid email pattern"
      }
      if (controlName === 'password') {
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
