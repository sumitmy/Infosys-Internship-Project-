import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NotscheduledService } from './Services/notscheduled.service';

import { Appointment } from '../not-scheduled/Model/Appointment.model';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-scheduled',
  templateUrl: './scheduled.component.html',
  styleUrl: './scheduled.component.css'
})

export class ScheduledComponent implements OnInit {

selectedAppoint: any=null;
flag = false;

filteredAppointments: Appointment[] = [];
searchTerm: string = '';
scheduledappoints: any[]=[];
selectedStudent : any =null;
roleIdString: string|null=null;

  constructor(private http: HttpClient,private appointservice:NotscheduledService,
    private router:ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.router.paramMap.subscribe(params=>{
      this.roleIdString = params.get('roleIdString');
      console.log('RoleIdString:',this.roleIdString);
    });
    this.fetchScheduledStudents();
    
  }
  filterAppointments() {
    if (this.searchTerm) {
      console.log(this.searchTerm)
      
      this.filteredAppointments = this.scheduledappoints.filter(appoint =>
        appoint.applicantId.includes(this.searchTerm)
      );
      console.log(this.filteredAppointments)
      this.scheduledappoints = this.filteredAppointments;
    } else {
      this.fetchScheduledStudents();
    }
  }

  fetchScheduledStudents(): void {
    this.appointservice.getAllScheduled(this.roleIdString).subscribe(data => {
      this.scheduledappoints = data;
      
      console.log(this.filteredAppointments)
      console.log(this.roleIdString);
      console.log(data);
    });
  }

  openResume(appoint: Appointment): void {
    this.selectedStudent = appoint;
    console.log(appoint.applicantId)
    this.appointservice.downloadResume(appoint.applicantId).subscribe(response => {
      const blob = new Blob([response], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      window.open(url);
    })
  }
  infobutton(appoint: any) {
    this.selectedAppoint = appoint;
    this.flag=true;
    }

  closeModal():void{
      this.selectedAppoint = null;
      this.flag = false;
    }
 
}
