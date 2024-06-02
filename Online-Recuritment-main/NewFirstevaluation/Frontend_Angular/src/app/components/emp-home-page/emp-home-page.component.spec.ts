import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpHomePageComponent } from './emp-home-page.component';

describe('EmpHomePageComponent', () => {
  let component: EmpHomePageComponent;
  let fixture: ComponentFixture<EmpHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmpHomePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmpHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
