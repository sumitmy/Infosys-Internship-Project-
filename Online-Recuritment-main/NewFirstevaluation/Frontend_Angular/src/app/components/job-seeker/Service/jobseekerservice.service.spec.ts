import { TestBed } from '@angular/core/testing';

import { JobseekerserviceService } from './jobseekerservice.service';

describe('JobseekerserviceService', () => {
  let service: JobseekerserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobseekerserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
