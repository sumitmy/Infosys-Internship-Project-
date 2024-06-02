import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {RegistrationComponent} from "./components/registration/registration.component";
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';

import { LoginSuccessComponent } from './components/login-success/login-success.component';
import { EmailVerificationComponent } from './components/email-verification/email-verification.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { EmpLoginComponent } from './components/emp-login/emp-login.component';
import { EmpRegisterComponent } from './components/emp-register/emp-register.component';
import { StudLoginComponent } from './components/stud-login/stud-login.component';
import { StudRegisterComponent } from './components/stud-register/stud-register.component';
import { JobSeekerComponent } from './components/job-seeker/job-seeker.component';
import { JobRegisterComponent } from './components/job-register/job-register.component';
import { JobdescriptionComponent } from './jobdescription/jobdescription.component';
import { JoblistComponent } from './joblist/joblist.component';
import { HomeComponent } from './components/home/home.component';
import { JobSearchComponent } from './components/job-search/job-search.component';
import { AppliedJobListComponent } from './components/applied-job-list/applied-job-list.component';
import { AdminDashComponent } from './components/admin-dash/admin-dash.component';
import { GradDashComponent } from './components/grad-dash/grad-dash.component';
import { EmpDashComponent } from './components/emp-dash/emp-dash.component';
import { JobDashComponent } from './components/job-dash/job-dash.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { EmpHomePageComponent } from './components/emp-home-page/emp-home-page.component';
import { NotScheduledComponent } from './components/not-scheduled/not-scheduled.component';
import { ScheduledComponent } from './components/scheduled/scheduled.component';



const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegistrationComponent
  },
  {
    path: 'forgotpassword',
    component: ForgotpasswordComponent
  },
  {
    path: 'home/:roleIdString',
    component: HomeComponent,
  },
  {
    path:'home',
    component:HomeComponent,
  },
  {
    path: 'login-success',
    component: LoginSuccessComponent,
  },
  {
    path: 'email',
    component:EmailVerificationComponent
  },

  {
    path: 'applied-job-list',
    component : AppliedJobListComponent
  },

  {
    path: 'admin-login',
    component : AdminLoginComponent
  },


  {
    path: 'job-seeker/:roleIdString/:jobId',
    component: JobSeekerComponent
  },

  {
    path: 'job-register/:roleIdString',
    component: JobRegisterComponent

  },

  {
    path: 'job-register',
    component: JobRegisterComponent

  },

  {
    path: 'admin-dash',
    component: AdminDashComponent, children: [
      { path: 'graduates', component: GradDashComponent },
      { path: 'employers', component: EmpDashComponent },
      { path: 'jobs', component: JobDashComponent },
      { path: '', redirectTo: 'graduates', pathMatch: 'full' },
    ]
  },

  {
    path:'',
    redirectTo: 'home', pathMatch: 'full',
  },
  {
    path: 'stud-register/:roleIdString',
    component: StudRegisterComponent
  },

  {
    path: 'emp-register/:roleIdString',
    component:EmpRegisterComponent
  },

  {
    path: 'stud-register',
    component: StudRegisterComponent
  },

  {
    path: 'emp-register',
    component:EmpRegisterComponent
  },

  {
    path:'appointment',
    // /:roleIdString/:jobId
    component:AppointmentComponent
  },
  {
    path:'jobdescription/:roleIdString/:jobId',
    component:JobdescriptionComponent
  },
  {
    path:'jobsearch/:searchvalue',
    component:JoblistComponent
  },
  {
    path:'jobsearch/:roleIdString/:searchvalue',
    component:JoblistComponent
  },
  {
    path:'gradhome/:roleIdString',
    component:JobSearchComponent
  },
  {
    path:'gradhome',
    component:JobSearchComponent
  },
  {
    path: 'emp-home-page/:roleIdString', component: EmpHomePageComponent,
    children: [
      { path: 'job-register/:roleIdString', component: JobRegisterComponent },
      { path: 'scheduled/:roleIdString', component: ScheduledComponent },
      { path: 'not-scheduled/:roleIdString', component: NotScheduledComponent },
     
    ]
  },
  {
    path: 'email-verification',
    component: EmailVerificationComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
