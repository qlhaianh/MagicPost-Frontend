import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcelReceiptComponent } from './parcel-receipt.component';

describe('ParcelReceiptComponent', () => {
  let component: ParcelReceiptComponent;
  let fixture: ComponentFixture<ParcelReceiptComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParcelReceiptComponent]
    });
    fixture = TestBed.createComponent(ParcelReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
