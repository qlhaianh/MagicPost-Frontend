// outbound-order.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OutboundOrderService {
  private apiUrl = 'your_api_url_here'; // Thay thế bằng URL API thực tế

  constructor(private http: HttpClient) { }

  createOutboundOrder(orderDetails: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/create-outbound-order`, orderDetails);
  }
}
