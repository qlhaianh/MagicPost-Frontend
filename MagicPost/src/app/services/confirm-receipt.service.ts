import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfirmReceiptService {
  private apiUrl = 'your_api_url_here'; // Thay thế bằng URL API thực tế

  constructor(private http: HttpClient) { }

  confirmReceipt(shipmentCode: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/confirm-receipt`, { shipmentCode });
  }
}

