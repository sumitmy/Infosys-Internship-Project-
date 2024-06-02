import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-emp-home-page',
  templateUrl: './emp-home-page.component.html',
  styleUrl: './emp-home-page.component.css'
})
export class EmpHomePageComponent {

  roleIdString!:string;
  constructor(private route: Router,private router:ActivatedRoute) {

  }

  ngOnInit(): void {
    this.router.paramMap.subscribe(params => {
      this.roleIdString = String(params.get('roleIdString'));
      console.log(this.roleIdString);
    });
  }

  post(){
    console.log(this.roleIdString);
    if (this.roleIdString === 'null' || this.roleIdString === null) {
      alert('Please login As Employer');
    } else {
      this.route.navigate([`/job-register/${this.roleIdString}`]);
    }
  }

  jobsforyou(){
    console.log(this.roleIdString);
    this.route.navigate([`/gradhome/${this.roleIdString}`])
  }
  
}
