import { Component, OnInit } from '@angular/core';
import { ManagerService } from './../../services/manager.service';
@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
  managerDetails: any;

  constructor(private managerService: ManagerService) { }

  ngOnInit() {
    // Lấy thông tin trưởng điểm khi component được tạo
    this.getManagerData();
  }

  getManagerData() {
    this.managerService.getManagerDetails(1) // Thay số 1 bằng ID thực tế của trưởng điểm
      .subscribe((data: any) => {
        this.managerDetails = data;
      });
  }

  updateManager() {
    // Cập nhật thông tin trưởng điểm
    const updatedData = { /* Dữ liệu cập nhật */ };
    this.managerService.updateManagerDetails(1, updatedData) // Thay số 1 bằng ID thực tế của trưởng điểm
      .subscribe((response: any) => {
        // Xử lý sau khi cập nhật thành công
        this.getManagerData(); // Cập nhật lại thông tin sau khi cập nhật thành công
      });
  }
}

