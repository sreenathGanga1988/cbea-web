import { Component } from '@angular/core';
import { DashboardServices } from '../../../Services/dashboard.services';
import { Highcharts } from 'highcharts/modules/map';

@Component({
  selector: 'app-dashboardchart',
  standalone: true,
  imports: [],
  templateUrl: './dashboardchart.component.html',
  styleUrl: './dashboardchart.component.css'
})
export class DashboardchartComponent {

  constructor(private dataService: DashboardServices) {}

  ngOnInit(): void {
    this.dataService.getDashBoardData().subscribe((data) => {
      this.renderEmployeeContributionChart(data.employeeContribution);
      this.renderRefundChart(data.refunds);
      this.renderNewJoineesChart(data.newJoinees);
    });
  }

  renderEmployeeContributionChart(data: { year: string; amount: number }[]) {
    Highcharts.chart('employeeContributionChart', {
      chart: { type: 'column' },
      title: { text: 'Yearly Employee Contribution' },
      xAxis: {
        categories: data.map((d) => d.year),
        title: { text: 'Year' },
      },
      yAxis: {
        title: { text: 'Total Contribution Amount' },
      },
      series: [
        {
          name: 'Contribution Amount',
          data: data.map((d) => d.amount),
          type: 'column',
        },
      ],
    });
  }

  renderRefundChart(data: { year: string; amount: number }[]) {
    Highcharts.chart('refundChart', {
      chart: { type: 'line' },
      title: { text: 'Yearly Refunds to Employees' },
      xAxis: {
        categories: data.map((d) => d.year),
        title: { text: 'Year' },
      },
      yAxis: {
        title: { text: 'Refund Amount' },
      },
      series: [
        {
          name: 'Refund Amount',
          data: data.map((d) => d.amount),
          type: 'line',
        },
      ],
    });
  }

  renderNewJoineesChart(data: { year: string; count: number }[]) {
    Highcharts.chart('newJoineesChart', {
      chart: { type: 'bar' },
      title: { text: 'Yearly New Joinees' },
      xAxis: {
        categories: data.map((d) => d.year),
        title: { text: 'Year' },
      },
      yAxis: {
        title: { text: 'Number of New Joinees' },
      },
      series: [
        {
          name: 'New Joinees',
          data: data.map((d) => d.count),
          type: 'bar',
        },
      ],
    });
  }
}

