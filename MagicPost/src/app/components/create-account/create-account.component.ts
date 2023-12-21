import { Component } from '@angular/core';
import { CreateAccountService } from './../../services/create-account.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {
  constructor(private createAccountService: CreateAccountService) { }

  createAccount() {
    // Tạo tài khoản cho giao dịch viên
    const accountData = { /* Dữ liệu tạo tài khoản */ };
    this.createAccountService.createAccountForStaff(accountData)
      .subscribe((response: any) => {
        // Xử lý sau khi tạo tài khoản thành công
      });
  }
}
