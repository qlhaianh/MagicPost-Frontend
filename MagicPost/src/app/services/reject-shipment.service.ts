import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RejectShipmentService {
  private apiUrl = 'your_api_url_here'; // Thay thế bằng URL API thực tế

  constructor(private http: HttpClient) { }

  rejectShipment(shipmentCode: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/reject-shipment`, { shipmentCode });
  }
}
