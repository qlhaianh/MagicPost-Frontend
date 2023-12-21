import { Component } from '@angular/core';
import { ParcelTrackingService } from './../../services/parceltracking.service';

@Component({
  selector: 'app-parceltracking',
  templateUrl: './parceltracking.component.html',
  styleUrls: ['./parceltracking.component.css']
})
export class ParceltrackingComponent {
  parcelId: number = 0;
  parcelDetails: any;

  constructor(private parcelTrackingService: ParcelTrackingService) { }

  trackParcel() {
    // Tra cứu trạng thái và tiến trình chuyển phát của kiện hàng
    this.parcelTrackingService.trackParcel(this.parcelId)
      .subscribe((data: any) => {
        this.parcelDetails = data;
      });
  }
}
