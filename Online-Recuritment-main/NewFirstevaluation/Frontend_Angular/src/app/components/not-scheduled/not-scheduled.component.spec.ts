import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotScheduledComponent } from './not-scheduled.component';

describe('NotScheduledComponent', () => {
  let component: NotScheduledComponent;
  let fixture: ComponentFixture<NotScheduledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotScheduledComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotScheduledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
