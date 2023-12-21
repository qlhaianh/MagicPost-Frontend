// manager.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {
  private managerURL = 'your_api_url_here';

  constructor(private http: HttpClient) { }

  // Lấy thông tin trưởng điểm
  getManagerDetails(managerId: number): Observable<any> {
    return this.http.get(`${this.managerURL}/managers/${managerId}`);
  }

  // Cập nhật thông tin trưởng điểm
  updateManagerDetails(managerId: number, data: any): Observable<any> {
    return this.http.put(`${this.managerURL}/managers/${managerId}`, data);
  }
}
