import { TestBed } from '@angular/core/testing';

import { EmployerregistrationserviceService } from './employerregistrationservice.service';

describe('EmployerregistrationserviceService', () => {
  let service: EmployerregistrationserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployerregistrationserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
