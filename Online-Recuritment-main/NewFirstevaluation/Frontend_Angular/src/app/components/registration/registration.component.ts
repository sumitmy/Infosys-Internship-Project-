import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ValidatorFn, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { EmailService } from '../../email.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  nationalities = [
    'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina', 'Armenia',
    'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium',
    'Belize', 'Benin', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria',
    'Burkina Faso', 'Burundi', 'Cabo Verde', 'Cambodia', 'Cameroon', 'Canada', 'Central African Republic', 'Chad',
    'Chile', 'China', 'Colombia', 'Comoros', 'Congo', 'Costa Rica', 'Croatia', 'Cuba', 'Cyprus', 'Czechia',
    'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea',
    'Eritrea', 'Estonia', 'Eswatini', 'Ethiopia', 'Fiji', 'Finland', 'France', 'Gabon', 'Gambia', 'Georgia',
    'Germany', 'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Honduras',
    'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Jamaica', 'Japan',
    'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Korea, North', 'Korea, South', 'Kosovo', 'Kuwait', 'Kyrgyzstan',
    'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Madagascar',
    'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius', 'Mexico',
    'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Morocco', 'Mozambique', 'Myanmar', 'Namibia',
    'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'North Macedonia', 'Norway',
    'Oman', 'Pakistan', 'Palau', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines',
    'Poland', 'Portugal', 'Qatar', 'Romania', 'Russia', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia',
    'Saint Vincent and the Grenadines', 'Samoa', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal',
    'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia',
    'South Africa', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Sweden', 'Switzerland', 'Syria',
    'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Timor-Leste', 'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia',
    'Turkey', 'Turkmenistan', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom',
    'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City', 'Venezuela', 'Vietnam', 'Yemen', 'Zambia',
    'Zimbabwe'
];


registrationForm: FormGroup;
emailPattern: string = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$";
passwordPattern:string ="^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$";
roleIdString: any;


constructor(private fb: FormBuilder,private router: Router,
  private emailService:EmailService

) {
  this.registrationForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
    address: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(200)]],
    email: ['', [Validators.required, Validators.email,Validators.pattern(this.emailPattern)]],
    phone: ['', [Validators.required, Validators.pattern('^[789]\\d{9}$'), Validators.minLength(10), Validators.maxLength(10)]],
    password: ['', [Validators.required, Validators.minLength(8),Validators.pattern(this.passwordPattern)]],
    confirmpassword:['',[Validators.required, Validators.minLength(8)]],
    nationality: ['', [Validators.required]],
    signas:['',[Validators.required]]
  },{ validator: this.passwordMatchValidator });
}



ngOnInit(): void {

}

onSubmit(): void {
  if (this.registrationForm.valid) {
    console.log('Form submitted with values:', this.registrationForm.value);
    console.log(this.registrationForm.value.email)
    

    const email = this.registrationForm.get('email')?.value;
    this.emailService.checkUserExist(email).subscribe( response =>
      {
        if(response==true){
          alert("You have already registered, Please Kindly Login")
          this.router.navigate(['/login']);
        }
        else{
          this.emailService.generateOtp(email).subscribe(
            respone=> {alert("Please Verify Your Email, Kindly Check your Mail")
             console.log(respone)
            }
           )
           this.router.navigate(['/email'], { state: { formData: this.registrationForm.value } });
        }
      }
    )
    
  }
}

passwordMatchValidator(formGroup: FormGroup) {
  const passwordControl = formGroup.get('password');
  const confirmPasswordControl = formGroup.get('confirmpassword');

  if (passwordControl?.value !== confirmPasswordControl?.value) {
    confirmPasswordControl?.setErrors({ mismatch: true });
  } else {
    confirmPasswordControl?.setErrors(null);
  }
}

isInvalid(controlName: string): boolean {
  const control = this.registrationForm.get(controlName);
  return control ? control.invalid && (control.dirty || control.touched) : false;
}

getErrorMessage(controlName: string): string {
  const control = this.registrationForm.get(controlName);

  if (!control) {
    // console.log(`Control ${controlName} not found.`);
    return '';
  }

  if (control.hasError('pattern')) {
    if (controlName === 'password') {
      return "Password must contain at least one uppercase letter, one lowercase letter, one digit, one special character, and be at least 8 characters long.";
    }
    if (controlName === "email") {
      return "Invalid email pattern";
    }
    if(controlName==='phone'){
      return "Invalid Phone number"
    }
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

  if (control.errors) {
    if (control.hasError('mismatch')) {
      return 'Passwords do not match';
    }
  }

  return '';
}


  images = [
    { src: 'https://th.bing.com/th/id/OIP.r-hEWQ-I_IqLFNv-ZbhU6AHaE6?rs=1&pid=ImgDetMain', alt: 'Slide 1' },
    { src: 'https://cdn.pixabay.com/photo/2018/03/18/11/58/recruit-3236547_1280.jpg', alt: 'Slide 2' },
    { src: 'https://cdn.pixabay.com/photo/2018/07/13/18/48/career-3536331_960_720.jpg', alt: 'Slide 3' }
  ];

}
