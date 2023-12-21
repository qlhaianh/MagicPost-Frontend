import { TestBed } from '@angular/core/testing';

import { ConfirmReceiptService } from './confirm-receipt.service';

describe('ConfirmReceiptService', () => {
  let service: ConfirmReceiptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfirmReceiptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
