import { TestBed } from '@angular/core/testing';

import { ParcelReceiptService } from './parcel-receipt.service';

describe('ParcelReceiptService', () => {
  let service: ParcelReceiptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParcelReceiptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
