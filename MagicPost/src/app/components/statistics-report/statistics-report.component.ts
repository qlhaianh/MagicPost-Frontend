import { Component, OnInit } from '@angular/core';
import { StatisticsReportService } from './../../services/statistics-report.service';

@Component({
  selector: 'app-statistics-report',
  templateUrl: './statistics-report.component.html',
  styleUrls: ['./statistics-report.component.css']
})
export class StatisticsReportComponent implements OnInit {
  sentItemsStats: any;
  receivedItemsStats: any;

  constructor(private statisticsReportService: StatisticsReportService) { }

  ngOnInit() {
    // Thống kê hàng gửi
    this.statisticsReportService.getSentItemsStatistics()
      .subscribe((data: any) => {
        this.sentItemsStats = data;
      });

    // Thống kê hàng nhận
    this.statisticsReportService.getReceivedItemsStatistics()
      .subscribe((data: any) => {
        this.receivedItemsStats = data;
      });
  }
}
