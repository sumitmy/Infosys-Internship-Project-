import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudRegisterComponent } from './stud-register.component';

describe('StudRegisterComponent', () => {
  let component: StudRegisterComponent;
  let fixture: ComponentFixture<StudRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudRegisterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
