import { ConfirmInboundOrderService } from './../../services/confirm-inbound-order.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-confirm-inbound-order',
  templateUrl: './confirm-inbound-order.component.html',
  styleUrls: ['./confirm-inbound-order.component.css']
})
export class ConfirmInboundOrderComponent {
  orderId: number = 0;

  constructor(private confirmInboundOrderService: ConfirmInboundOrderService) { }

  confirmInboundOrder() {
    this.confirmInboundOrderService.confirmInboundOrder(this.orderId)
      .subscribe((response: any) => {
        console.log('Đã xác nhận đơn hàng về:', response);
        // Xử lý sau khi xác nhận đơn hàng về thành công
      });
  }
}
