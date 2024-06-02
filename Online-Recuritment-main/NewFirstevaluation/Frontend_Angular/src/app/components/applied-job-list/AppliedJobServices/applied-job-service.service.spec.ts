// applied-job.service.spec.ts

import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AppliedJobService } from './applied-job-service.service';

describe('AppliedJobService', () => {
  let service: AppliedJobService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AppliedJobService]
    });
    service = TestBed.inject(AppliedJobService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return candidates', () => {
    const mockCandidates = [
      { jobId: 1, name: 'John Doe', email: 'john@example.com', phone: '1234567890', yearOfPassing: 2022, cgpa: 8.5, language: 'English', keySkill: 'Angular', areasOfInterest: 'Web Development', project: 'Project X', resume: 'link-to-resume', appointmentTime: '10:00 AM', appointmentDate: '2024-05-10' },
      { jobId: 2, name: 'Jane Doe', email: 'jane@example.com', phone: '9876543210', yearOfPassing: 2023, cgpa: 8.0, language: 'Spanish', keySkill: 'React', areasOfInterest: 'UI/UX Design', project: 'Project Y', resume: 'link-to-resume', appointmentTime: '11:00 AM', appointmentDate: '2024-05-12' }
    ];

    service.getCandidates().subscribe(candidates => {
      expect(candidates.length).toBe(2);
      expect(candidates).toEqual(mockCandidates);
    });

    const request = httpMock.expectOne('api/candidates');
    expect(request.request.method).toBe('GET');
    request.flush(mockCandidates);
  });
});
