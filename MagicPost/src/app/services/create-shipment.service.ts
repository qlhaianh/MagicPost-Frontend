import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateShipmentService {
  private apiUrl = 'your_api_url_here'; // Thay thế bằng URL API thực tế

  constructor(private http: HttpClient) { }

  createShipment(shipmentDetails: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/create-shipment`, shipmentDetails);
  }
}
