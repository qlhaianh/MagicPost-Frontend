import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectShipmentComponent } from './reject-shipment.component';

describe('RejectShipmentComponent', () => {
  let component: RejectShipmentComponent;
  let fixture: ComponentFixture<RejectShipmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RejectShipmentComponent]
    });
    fixture = TestBed.createComponent(RejectShipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
