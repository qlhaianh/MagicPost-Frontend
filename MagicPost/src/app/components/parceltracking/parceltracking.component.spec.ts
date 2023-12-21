import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParceltrackingComponent } from './parceltracking.component';

describe('ParceltrackingComponent', () => {
  let component: ParceltrackingComponent;
  let fixture: ComponentFixture<ParceltrackingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParceltrackingComponent]
    });
    fixture = TestBed.createComponent(ParceltrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
