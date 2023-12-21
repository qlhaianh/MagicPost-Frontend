import { RejectShipmentService } from './../../services/reject-shipment.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-reject-shipment',
  templateUrl: './reject-shipment.component.html',
  styleUrls: ['./reject-shipment.component.css']
})
export class RejectShipmentComponent {
  shipmentCode: string = '';
  isSuccess: boolean = false;
  errorMessage: string = '';

  constructor(private rejectShipmentService: RejectShipmentService) { }

  rejectShipment() {
    this.rejectShipmentService.rejectShipment(this.shipmentCode)
      .subscribe(
        (response: any) => {
          console.log('Đã xác nhận không chuyển được đơn hàng:', response);
          this.isSuccess = true;
          // Có thể hiển thị thông báo thành công ở đây
        },
        (error) => {
          console.error('Lỗi khi xác nhận không chuyển được đơn hàng:', error);
          this.isSuccess = false;
          this.errorMessage = 'Đã xảy ra lỗi khi xác nhận không chuyển được đơn hàng.';
          // Có thể hiển thị thông báo lỗi ở đây
        }
      );
  }
}
