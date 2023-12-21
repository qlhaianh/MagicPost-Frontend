import { OutboundOrderService } from './../../services/outbound-order.service';
// create-outbound-order.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-create-outbound-order',
  templateUrl: './create-outbound-order.component.html',
  styleUrls: ['./create-outbound-order.component.css']
})
export class CreateOutboundOrderComponent {
  orderDetails: any = {};

  constructor(private outboundOrderService: OutboundOrderService) { }

  createOutboundOrder() {
    this.outboundOrderService.createOutboundOrder(this.orderDetails)
      .subscribe((response: any) => {
        console.log('Đã tạo đơn chuyển hàng:', response);
        // Xử lý sau khi tạo đơn chuyển hàng thành công
      });
  }
}

