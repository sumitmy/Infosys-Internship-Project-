import { TestBed } from '@angular/core/testing';

import { JobdescriptionserviceService } from './jobdescriptionservice.service';

describe('JobdescriptionserviceService', () => {
  let service: JobdescriptionserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobdescriptionserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
