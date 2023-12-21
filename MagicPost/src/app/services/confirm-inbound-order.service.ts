// confirm-inbound-order.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfirmInboundOrderService {
  private apiUrl = 'your_api_url_here'; // Thay thế bằng URL API thực tế

  constructor(private http: HttpClient) { }

  confirmInboundOrder(orderId: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/confirm-inbound-order/${orderId}`, {});
  }
}

