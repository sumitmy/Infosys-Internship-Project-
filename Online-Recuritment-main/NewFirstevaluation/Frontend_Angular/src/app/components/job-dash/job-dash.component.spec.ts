import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobDashComponent } from './job-dash.component';

describe('JobDashComponent', () => {
  let component: JobDashComponent;
  let fixture: ComponentFixture<JobDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JobDashComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
