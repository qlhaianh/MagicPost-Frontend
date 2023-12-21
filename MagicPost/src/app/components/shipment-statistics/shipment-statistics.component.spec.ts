import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentStatisticsComponent } from './shipment-statistics.component';

describe('ShipmentStatisticsComponent', () => {
  let component: ShipmentStatisticsComponent;
  let fixture: ComponentFixture<ShipmentStatisticsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShipmentStatisticsComponent]
    });
    fixture = TestBed.createComponent(ShipmentStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
