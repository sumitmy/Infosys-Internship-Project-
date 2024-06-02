import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dash',
  templateUrl: './admin-dash.component.html',
  styleUrl: './admin-dash.component.css'
})
export class AdminDashComponent {

  constructor(private router: Router) {}

  navigate(path: string) {
    this.router.navigate([`/admin-dash/${path}`]);
  }

  isActive(route: string): boolean {
    return this.router.isActive(route, false);
  }

}

