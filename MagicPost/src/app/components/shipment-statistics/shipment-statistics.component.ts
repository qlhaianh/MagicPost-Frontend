import { ShipmentStatisticsService } from './../../services/shipment-statistics.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-shipment-statistics',
  templateUrl: './shipment-statistics.component.html',
  styleUrls: ['./shipment-statistics.component.css']
})
export class ShipmentStatisticsComponent {
  shipments: any[] = [];

  constructor(private shipmentStatisticsService: ShipmentStatisticsService) { }

  getSuccessfulShipments() {
    this.shipmentStatisticsService.getSuccessfulShipments()
      .subscribe(
        (response: any) => {
          console.log('Hàng chuyển thành công:', response);
          this.shipments = response.successfulShipments;
        },
        (error) => {
          console.error('Lỗi khi lấy dữ liệu hàng chuyển thành công:', error);
        }
      );
  }

  getFailedShipments() {
    this.shipmentStatisticsService.getFailedShipments()
      .subscribe(
        (response: any) => {
          console.log('Hàng chuyển không thành công:', response);
          this.shipments = response.failedShipments;
        },
        (error) => {
          console.error('Lỗi khi lấy dữ liệu hàng chuyển không thành công:', error);
        }
      );
  }

  getReturnedShipments() {
    this.shipmentStatisticsService.getReturnedShipments()
      .subscribe(
        (response: any) => {
          console.log('Hàng trả lại điểm giao dịch:', response);
          this.shipments = response.returnedShipments;
        },
        (error) => {
          console.error('Lỗi khi lấy dữ liệu hàng trả lại điểm giao dịch:', error);
        }
      );
  }
}

