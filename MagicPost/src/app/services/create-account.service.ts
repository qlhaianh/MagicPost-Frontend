// create-account.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateAccountService {
  private accountURL = 'your_api_url_here';

  constructor(private http: HttpClient) { }

  // Tạo tài khoản cho giao dịch viên
  createAccountForStaff(data: any): Observable<any> {
    return this.http.post(`${this.accountURL}/accounts`, data);
  }
}

