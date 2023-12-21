// statistics-report.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatisticsReportService {
  private statisticsURL = 'your_api_url_here';

  constructor(private http: HttpClient) { }

  // Thống kê hàng gửi tại điểm giao dịch
  getSentItemsStatistics(): Observable<any> {
    return this.http.get(`${this.statisticsURL}/sent-items`);
  }

  // Thống kê hàng nhận tại điểm giao dịch
  getReceivedItemsStatistics(): Observable<any> {
    return this.http.get(`${this.statisticsURL}/received-items`);
  }
}

