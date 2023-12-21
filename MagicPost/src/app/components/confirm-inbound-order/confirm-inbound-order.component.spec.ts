import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmInboundOrderComponent } from './confirm-inbound-order.component';

describe('ConfirmInboundOrderComponent', () => {
  let component: ConfirmInboundOrderComponent;
  let fixture: ComponentFixture<ConfirmInboundOrderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmInboundOrderComponent]
    });
    fixture = TestBed.createComponent(ConfirmInboundOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
