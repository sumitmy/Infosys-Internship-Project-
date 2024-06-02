import { Component } from '@angular/core';
import { AppliedJobService } from './AppliedJobServices/applied-job-service.service';

@Component({
  selector: 'app-applied-job-list',
  templateUrl: './applied-job-list.component.html',
  styleUrl: './applied-job-list.component.css'
})
export class AppliedJobListComponent {

  candidates: any[] = [];


  constructor(private appliedJobService: AppliedJobService) { }

  ngOnInit(): void {
    this.loadCandidates();
  }

  loadCandidates() {
    this.appliedJobService.getCandidates().subscribe(
      (data: any[]) => {
        this.candidates = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
