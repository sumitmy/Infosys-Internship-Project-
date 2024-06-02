import { Component, OnInit} from '@angular/core';
import { GraduateserviceService } from './Services/graduateservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { College, Graduate, User } from './Models/graduate.model';

@Component({
  selector: 'app-grad-dash',
  templateUrl: './grad-dash.component.html',
  styleUrl: './grad-dash.component.css'
})
export class GradDashComponent implements OnInit {


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

  selectedGraduate: any = null;
  selectedGraduateforedit: any = null;
  graduateForm!: FormGroup;
  graduates: any[] = []; // Replace with your actual type

  user!:User;
  college!:College;
  graduate!:Graduate;
  selectedGraduatefordelete: any=null;

  constructor(private graduateservice:GraduateserviceService,private fb:FormBuilder){}

  ngOnInit() {
    this.loadGraduates();

    this.graduateForm = this.fb.group({
      roleId: [{ value: '', disabled: true }],
      name: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('^[789]\\d{9}$'), Validators.minLength(10), Validators.maxLength(10)]],
      nationality: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      pinCode: ['', [Validators.required, Validators.pattern('^[1-9][0-9]{5}$')]],
      yearOfPassing: ['', [Validators.required, Validators.pattern('^[0-9]{4}$')]],
      cgpa: ['', [Validators.required, Validators.pattern('^\\d+(\\.\\d{1,2})?$')]],
      collegeName: ['', Validators.required],
      collegeDescription: ['', Validators.required],
      collegeAddress: ['', Validators.required],
    });

  
  }

  loadGraduates() {
    // Fetch graduates from the server
    this.graduateservice.getListOfGraduates().subscribe(data=>{
      this.graduates = data;
      this.graduates.forEach(i=>{
        this.graduateservice.getUserbyroleId(i.roleId.roleId).subscribe(user=>{
          i.user = user;
        }
      )
      this.graduateservice.getCollegeByroleId(i.roleId.roleId).subscribe(college=>{
        i.college = college;
      })
      })
      console.log(this.graduates)
    })
  }

  createGraduate() {
    // Open a form to create a new graduate
  }

  editGraduate(graduate: any) {
    // Open a form to edit the graduate
    this.selectedGraduateforedit = graduate
  }

  deleteGraduate(id: string) {
    // Delete the graduate
    this.selectedGraduatefordelete = id;
    console.log(id);
  }

  infoGradute(graduate: any) {
    this.selectedGraduate = graduate;
    
  }

  onSubmit() {
    if (this.graduateForm.valid) {
    
     
      const formValues = this.graduateForm.value;

      
      this.user = {
        ...this.user,
        roleId: { roleId: formValues.roleId },
        address: formValues.address,
        name: formValues.name,
        nationality: formValues.nationality,
        phone: formValues.phone,
      };

      this.college = {
        ...this.college,
        roleId: { roleId: formValues.roleId },
        collegeName: formValues.collegeName,
        collegeDescription: formValues.collegeDescription,
        collegeAddress: formValues.collegeAddress
      };

      this.graduate = {
        ...this.graduate,
        roleId: { roleId: formValues.roleId },
        cgpa: formValues.cgpa,
        city: formValues.city,
        pinCode: formValues.pinCode,
        state: formValues.state,
        yearOfPassing: formValues.yearOfPassing
      };

     
      
      this.graduateservice.updateUser(this.user,this.selectedGraduateforedit.roleId.roleId).subscribe(
        (response)=>{
        console.log("submitted");
        },
        (error)=>{
          console.log("error")
        }
      );
      this.graduateservice.updateCollege(this.college,this.selectedGraduateforedit.roleId.roleId).subscribe(
        (response)=>{
          console.log("submitted");
          },
          (error)=>{
            console.log("error")
          }
      );
      this.graduateservice.updateGraduate(this.graduate,this.selectedGraduateforedit.roleId.roleId).subscribe(
        (response)=>{
          console.log("submitted");
          }
      );
      alert("submitted")
      this.closeModalforEdit();
      this.loadGraduates();
    }
  }

  deleteGraduatebyrole() {
    this.graduateservice.deleteUserByRole(this.selectedGraduatefordelete).subscribe((response)=>{
      console.log("submitted");
      },
      (error)=>{
        console.log("error")
      });
    alert("deleted");
    this.closeModalforDelete();
    this.loadGraduates();
  }

  closeModal():void{
    this.selectedGraduate = null;
    
  }
  closeModalforEdit():void{
    this.selectedGraduateforedit = null;
  }

  
  closeModalforDelete():void{
    this.selectedGraduatefordelete = null;
  }

  isInvalid(controlName: string): boolean {
    const control = this.graduateForm.get(controlName);
    return control ? control.invalid && (control.dirty || control.touched) : false;
  }

  getErrorMessage(controlName: string): string {
    const control = this.graduateForm.get(controlName);
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
