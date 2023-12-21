import { ParcelReceiptService } from './../../services/parcel-receipt.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-parcel-receipt',
  templateUrl: './parcel-receipt.component.html',
  styleUrls: ['./parcel-receipt.component.css']
})
export class ParcelReceiptComponent {
  parcelInfo: any = {};
  printedReceipt: any;

  constructor(private parcelReceiptService: ParcelReceiptService) { }

  receiveParcel() {
    this.parcelReceiptService.receiveParcel(this.parcelInfo)
      .subscribe((response: any) => {
        console.log('Hàng đã được ghi nhận:', response);
        // Xử lý sau khi ghi nhận hàng thành công

        // Sau khi ghi nhận thành công, in giấy biên nhận
        this.printReceipt(response.id); // Gọi hàm in giấy biên nhận
      });
  }

  printReceipt(parcelId: number) {
    this.parcelReceiptService.printReceipt(parcelId)
      .subscribe((response: any) => {
        console.log('Đã in giấy biên nhận:', response);
        this.printedReceipt = response;
        // Xử lý sau khi in giấy biên nhận
      });
  }
}
