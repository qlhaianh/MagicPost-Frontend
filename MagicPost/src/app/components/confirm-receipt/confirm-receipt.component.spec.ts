import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmReceiptComponent } from './confirm-receipt.component';

describe('ConfirmReceiptComponent', () => {
  let component: ConfirmReceiptComponent;
  let fixture: ComponentFixture<ConfirmReceiptComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmReceiptComponent]
    });
    fixture = TestBed.createComponent(ConfirmReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
