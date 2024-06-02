import { TestBed } from '@angular/core/testing';

import { EmployerserviceService } from './employerservice.service';

describe('EmployerserviceService', () => {
  let service: EmployerserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployerserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
