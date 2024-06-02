import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudLoginComponent } from './stud-login.component';

describe('StudLoginComponent', () => {
  let component: StudLoginComponent;
  let fixture: ComponentFixture<StudLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudLoginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
