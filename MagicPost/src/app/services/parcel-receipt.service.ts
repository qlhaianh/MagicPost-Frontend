// parcel-receipt.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParcelReceiptService {
  private apiUrl = 'your_api_url_here'; // Thay thế bằng URL API thực tế

  constructor(private http: HttpClient) { }

  // Hàm gửi yêu cầu ghi nhận hàng cần gửi
  receiveParcel(parcelInfo: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/receive-parcel`, parcelInfo);
  }

  // Hàm in giấy biên nhận chuyển phát
  printReceipt(parcelId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/print-receipt/${parcelId}`);
  }
}

