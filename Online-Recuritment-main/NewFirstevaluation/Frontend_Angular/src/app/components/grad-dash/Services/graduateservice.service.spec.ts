import { TestBed } from '@angular/core/testing';

import { GraduateserviceService } from './graduateservice.service';

describe('GraduateserviceService', () => {
  let service: GraduateserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GraduateserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
