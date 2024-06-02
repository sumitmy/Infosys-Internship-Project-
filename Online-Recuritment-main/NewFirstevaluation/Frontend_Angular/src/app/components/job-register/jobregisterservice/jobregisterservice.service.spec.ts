import { TestBed } from '@angular/core/testing';

import { JobregisterserviceService } from './jobregisterservice.service';

describe('JobregisterserviceService', () => {
  let service: JobregisterserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobregisterserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
