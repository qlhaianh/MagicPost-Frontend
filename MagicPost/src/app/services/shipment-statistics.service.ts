import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShipmentStatisticsService {
  private apiUrl = 'your_api_url_here'; // Thay thế bằng URL API thực tế

  constructor(private http: HttpClient) { }

  getSuccessfulShipments(): Observable<any> {
    return this.http.get(`${this.apiUrl}/successful-shipments`);
  }

  getFailedShipments(): Observable<any> {
    return this.http.get(`${this.apiUrl}/failed-shipments`);
  }

  getReturnedShipments(): Observable<any> {
    return this.http.get(`${this.apiUrl}/returned-shipments`);
  }
}

