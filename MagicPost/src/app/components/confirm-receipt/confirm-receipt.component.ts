import { ConfirmReceiptService } from './../../services/confirm-receipt.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-confirm-receipt',
  templateUrl: './confirm-receipt.component.html',
  styleUrls: ['./confirm-receipt.component.css']
})
export class ConfirmReceiptComponent {
  shipmentCode: string = '';
  isSuccess: boolean = false;
  errorMessage: string = '';

  constructor(private confirmReceiptService: ConfirmReceiptService) { }

  confirmReceipt() {
    this.confirmReceiptService.confirmReceipt(this.shipmentCode)
      .subscribe(
        (response: any) => {
          console.log('Đã xác nhận đơn hàng:', response);
          this.isSuccess = true;
          // Có thể hiển thị thông báo thành công ở đây
        },
        (error) => {
          console.error('Lỗi khi xác nhận đơn hàng:', error);
          this.isSuccess = false;
          this.errorMessage = 'Đã xảy ra lỗi khi xác nhận đơn hàng.';
          // Có thể hiển thị thông báo lỗi ở đây
        }
      );
  }
}

