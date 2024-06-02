import { TestBed } from '@angular/core/testing';

import { ForgotpasswordserviceService } from './forgotpasswordservice.service';

describe('ForgotpasswordserviceService', () => {
  let service: ForgotpasswordserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForgotpasswordserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
