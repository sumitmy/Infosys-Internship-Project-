import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpDashComponent } from './emp-dash.component';

describe('EmpDashComponent', () => {
  let component: EmpDashComponent;
  let fixture: ComponentFixture<EmpDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmpDashComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmpDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
