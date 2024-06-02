import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  currentRoute!: string;
  roleIdString!:string;

  constructor(private route: Router,private router:ActivatedRoute) {
    
  }
  
  ngOnInit(): void {
    this.router.paramMap.subscribe(params => {
      this.roleIdString = String(params.get('roleIdString'));
      console.log(this.roleIdString);
    });
  }

  onActivate(event: any) {
    this.currentRoute = this.route.url;
  }

 

  post(){
    console.log(this.roleIdString);
    if (this.roleIdString === 'null' || this.roleIdString === null) { 
      alert('Please login');
    } else {
      this.route.navigate([`/job-register/${this.roleIdString}`]);
    }
  }
  
}