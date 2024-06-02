import { TestBed } from '@angular/core/testing';

import { JobListService } from './job-list.service';

describe('JobListService', () => {
  let service: JobListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
