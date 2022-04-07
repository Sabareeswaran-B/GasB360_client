import { Component, OnInit,  ViewChild  } from '@angular/core';
import {
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart,
  ChartComponent
} from "ng-apexcharts";
import { MenuItem } from 'primeng/api';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  plotOptions: ApexPlotOptions;
};
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @ViewChild("chart") chart!: ChartComponent;
 chartOptions1!: Partial<ChartOptions>;
employeeCount:number=40;
productCount:number=72;
filledCount:number=70;
unfilledCount:number=40;
orderProgress:number=83;
requestedCustomer:number=64;
basicData: any;
basicData1:any;
basicOptions: any;
data: any;
  chartOptions!: any;
horizontalOptions:any;
items!: MenuItem[];
  constructor() { }

  ngOnInit(): void {
    this.items = [
      // {label: 'Update', icon: 'pi pi-refresh'
      // , command: () => {
      //     this.update();
      // }
      // ,
      // {label: 'Delete', icon: 'pi pi-times', 
      // command: () => {
      //     this.delete();
      // },
      {label: 'Customer', icon: 'pi pi-info', url: 'http://angular.io'},
      {separator: true},
       {label: 'Order', icon: 'pi pi-info', url: 'http://angular.io'},
      {separator: true},
      {label: 'Delivery', icon: 'pi pi-info', url: 'http://angular.io'},
      {separator: true}
  ];

    this.chartOptions = {
      series: [44, 55, 67, 83],
      chart: {
        height: 350,
        type: "radialBar"
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: "22px"
            },
            value: {
              fontSize: "16px"
            },
            total: {
              show: true,
              label: "Total",
              formatter: function() {
                return "249";
              }
            }
          }
        }
      },
      labels: ["Product", "Filled", "Unfilled","Total"]
    };

    this.horizontalOptions = {
      indexAxis: 'y',
      scales: {
          x: {
              ticks: {
                  color: '#ebedef'
              }
          },
          y: {
              ticks: {
                  color: '#495057'
              }
          }
      }
  };

    this.data = {
      labels: ['Filled','Unfilled','Order'],
      datasets: [
          {
              data: [300, 50, 100],
              backgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
              ],
              hoverBackgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
              ]
          }
      ]
  };  
    this.basicData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
          {
              label: 'First Dataset',
              data: [65, 59, 80, 81, 56, 55, 40],
              fill: false,
              borderColor: '#42A5F5',
              tension: .4
          },
          {
              label: 'Second Dataset',
              data: [28, 48, 40, 19, 86, 27, 90],
              fill: false,
              borderColor: '#FFA726',
              tension: .4
          }
      ]
  };
  this.basicData1 = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            data: [65, 59, 80, 81],
            fill: false,
            borderColor: '#42A5F5',
            tension: .4
        }
    ]
};
  }

}
