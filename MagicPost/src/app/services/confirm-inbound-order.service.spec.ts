import { TestBed } from '@angular/core/testing';

import { ConfirmInboundOrderService } from './confirm-inbound-order.service';

describe('ConfirmInboundOrderService', () => {
  let service: ConfirmInboundOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfirmInboundOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
