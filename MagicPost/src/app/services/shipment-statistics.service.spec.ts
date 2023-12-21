import { TestBed } from '@angular/core/testing';

import { ShipmentStatisticsService } from './shipment-statistics.service';

describe('ShipmentStatisticsService', () => {
  let service: ShipmentStatisticsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShipmentStatisticsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
