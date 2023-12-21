import { TestBed } from '@angular/core/testing';

import { RejectShipmentService } from './reject-shipment.service';

describe('RejectShipmentService', () => {
  let service: RejectShipmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RejectShipmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
