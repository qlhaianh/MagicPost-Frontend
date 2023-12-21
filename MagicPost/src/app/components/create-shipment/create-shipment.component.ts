import { CreateShipmentService } from './../../services/create-shipment.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-create-shipment',
  templateUrl: './create-shipment.component.html',
  styleUrls: ['./create-shipment.component.css']
})
export class CreateShipmentComponent {
  shipmentDetails: any = {};
  isSuccess: boolean = false;
  errorMessage: string = '';

  constructor(private createShipmentService: CreateShipmentService) { }

  createShipment() {
    this.createShipmentService.createShipment(this.shipmentDetails)
      .subscribe(
        (response: any) => {
          console.log('Đã tạo đơn hàng:', response);
          this.isSuccess = true;
          // Có thể hiển thị thông báo thành công ở đây
        },
        (error) => {
          console.error('Lỗi khi tạo đơn hàng:', error);
          this.isSuccess = false;
          this.errorMessage = 'Đã xảy ra lỗi khi tạo đơn hàng.';
          // Có thể hiển thị thông báo lỗi ở đây
        }
      );
  }
}

