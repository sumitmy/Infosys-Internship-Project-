import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpRegisterComponent } from './emp-register.component';

describe('EmpRegisterComponent', () => {
  let component: EmpRegisterComponent;
  let fixture: ComponentFixture<EmpRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmpRegisterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmpRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
