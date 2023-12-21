import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOutboundOrderComponent } from './create-outbound-order.component';

describe('CreateOutboundOrderComponent', () => {
  let component: CreateOutboundOrderComponent;
  let fixture: ComponentFixture<CreateOutboundOrderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateOutboundOrderComponent]
    });
    fixture = TestBed.createComponent(CreateOutboundOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
