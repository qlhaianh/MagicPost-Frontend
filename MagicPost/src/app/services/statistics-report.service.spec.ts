import { TestBed } from '@angular/core/testing';

import { StatisticsReportService } from './statistics-report.service';

describe('StatisticsReportService', () => {
  let service: StatisticsReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatisticsReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
