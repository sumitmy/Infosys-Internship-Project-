import { TestBed } from '@angular/core/testing';

import { NotscheduledService } from './notscheduled.service';

describe('NotscheduledService', () => {
  let service: NotscheduledService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotscheduledService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
