import { TestBed } from '@angular/core/testing';

import { StudentregisterServiceService } from './studentregister-service.service';

describe('StudentregisterServiceService', () => {
  let service: StudentregisterServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentregisterServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
