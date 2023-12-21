import { TestBed } from '@angular/core/testing';

import { ParceltrackingService } from './parceltracking.service';

describe('ParceltrackingService', () => {
  let service: ParceltrackingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParceltrackingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
