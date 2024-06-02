import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradDashComponent } from './grad-dash.component';

describe('GradDashComponent', () => {
  let component: GradDashComponent;
  let fixture: ComponentFixture<GradDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GradDashComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GradDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
