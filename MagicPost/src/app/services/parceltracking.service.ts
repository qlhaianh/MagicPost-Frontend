// parcel-tracking.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParcelTrackingService {
  private parcelURL = 'your_api_url_here';

  constructor(private http: HttpClient) { }

  // Tra cứu trạng thái và tiến trình chuyển phát của kiện hàng
  trackParcel(parcelId: number): Observable<any> {
    return this.http.get(`${this.parcelURL}/parcels/${parcelId}`);
  }
}
