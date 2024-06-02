import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NotscheduledService } from './Services/notscheduled.service';
import { Appointment } from './Model/Appointment.model';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-not-scheduled',
  templateUrl: './not-scheduled.component.html',
  styleUrl: './not-scheduled.component.css'
})
export class NotScheduledComponent implements OnInit{

pdfview:any=null;
  appoints: any[] = [];
  selectedAppoint:any = null;
  flag:boolean = false;
  selectedStudentforResume:any=null;
  selectedforreject:any=null;
  filteredAppointments: Appointment[] = [];
searchTerm: string = '';
  roleIdString:string|null = null;
  constructor(private http: HttpClient,private appointmentservice:NotscheduledService,
    private router:ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.router.paramMap.subscribe(params=>{
      this.roleIdString = params.get('roleIdString');
      console.log('RoleIdString:',this.roleIdString);
    });
    this.fetchStudents();
    
  }

  fetchStudents(): void {
    this.appointmentservice.getAllNotScheduled(this.roleIdString).subscribe(data =>{
      this.appoints = data;
      console.log(data)
    })
  }

  openResume(applicantId: string): void {
    // Assuming resumeUrl is a string that contains the URL of the resume
  
    console.log(applicantId)
    this.appointmentservice.downloadResume(applicantId).subscribe(response => {
      const blob = new Blob([response], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      window.open(url);
    })
  }

  
  filterAppointments() {
    if (this.searchTerm) {
      console.log(this.searchTerm)
      
      this.filteredAppointments = this.appoints.filter(appoint =>
        appoint.applicantId.includes(this.searchTerm)
      );
      console.log(this.filteredAppointments)
      this.appoints = this.filteredAppointments;
    } else {
      this.fetchStudents();
    }
  }

 
 
  Appoint(appoint:Appointment) {
    this.appointmentservice.saveAppointment(appoint).subscribe();
    console.log("this is submiited");
alert("apppointed");
    this.closeModal();
    this.fetchStudents();
  }

  reject(appoint:Appointment) {
    this.selectedforreject = appoint;
    
    }

    deleteappointbyId(applicantId:string) {
      this.appointmentservice.rejectAppointment(applicantId).subscribe();
      alert("rejected");
      this.closeModalforreject();
      this.fetchStudents();
    }

    closeModalforreject() {
    this.selectedforreject = null;
    }
      
      
    

  closeResume(): void {
    this.selectedStudentforResume = null;
  }

  // appointStudent(student: Student): void {
  //   // Logic for appointing student
  // }

  Appointmentbutton(appoints: Appointment) {
    this.selectedAppoint = appoints;
    this.flag=true;
    console.log(this.selectedAppoint)
  }

  closeModal():void{
    this.selectedAppoint = null;
    this.flag = false;
  }
}
