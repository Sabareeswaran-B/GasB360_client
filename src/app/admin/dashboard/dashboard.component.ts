import { Component, OnInit, ViewChild, Injectable } from '@angular/core';
import { ApexNonAxisChartSeries, ApexPlotOptions, ApexChart, ChartComponent } from "ng-apexcharts";
import { MenuItem } from 'primeng/api';
import { AdminService } from 'src/app/service/admin.service';
import { Toast, ToastrService } from 'ngx-toastr';
import Dashboard from 'src/app/model/dashboard-model';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

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
  employeeCount!: number;
  // productCount!: number;
  // filledCount!: number;
  // unfilledCount!: number;
  rpmr: number[]=[0,0,0,5 * 2.3];
  stockdata : number[]=[0,0,0];
  saleskdata : number[]=[0,0,0];
  deliveryCount!: number;
  orderProgress!: number;
  requestedCustomer!: number;
  basicData: any;
  basicData1: any;
  basicOptions: any;
  stock: any;
  sales:any;
  chartOptions!: any;
  horizontalOptions: any;
  items!: MenuItem[];
  dash!: Dashboard;
  componentLoading: boolean = true;
  collapedSideBar!: boolean;
  customerCount!: number;
  count1: number = 0;
  


  constructor(private service: AdminService, private toaster: ToastrService) { }

  ngOnInit(): void {
    this.LoadingPage();
    this.items = [
      { label: 'Customer', icon: 'pi pi-info', command: () => { this.customerConvert() } },
      { separator: true },
      { label: 'Order', icon: 'pi pi-info', command: () => { this.orderConvert() } },
      { separator: true },
      { label: 'Delivery', icon: 'pi pi-info', command: () => { this.deliveryConvert() } },
    ];

    this.chartOptions = {
      series: this.rpmr,
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
              label: "GasB360",
              formatter: function () {
                return "239";
              }
            }
          }
        }
      },
      labels: ["Product", "Filled", "Unfilled", "Expired"]
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

    this.stock = {
      labels: ['Filled', 'Unfilled', 'Order'],
      datasets: [
        {
          data: this.stockdata,
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
    this.sales = {
      labels: ['Filled', 'Unfilled', 'Order'],
      datasets: [
        {
          data:  this.saleskdata,
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


  receiveCollapsed($event: boolean) {
    this.collapedSideBar = $event;
  }

 
  adminMenuItems: MenuItem[] = [
    { label: 'Dashboard', icon: 'pi pi-th-large', routerLink: '/admin/dashboard' },
    { label: 'Product', icon: 'pi pi-star', routerLink: '/admin/productcategory' },
    { label: 'Employee', icon: 'pi pi-id-card', routerLink: '/admin/employee' },
    { label: 'Connection', icon: 'pi pi-user', routerLink: '/admin/connection' },
    { label: 'Filled ', icon: 'pi pi-book', routerLink: '/admin/filledproduct' },
    { label: 'Unfilled', icon: 'pi pi-book', routerLink: '/admin/unfilledproduct' },
    { label: 'Logout', icon: 'k-icon k-i-undo', routerLink: '/login'},
  ];
 

  LoadingPage() {
    this.service.GetAdminDashboard().subscribe({
      next: (data) => {
        this.dash = data.data;
        // Customer Request
        this.requestedCustomer = this.dash.customerRequestCount.length;
        this.customerCount = this.dash.customer.length;
        this.requestedCustomer = Math.floor((this.requestedCustomer / this.customerCount) * 100);
        // Order Progress
        this.orderProgress = this.dash.orderCount;
        this.deliveryCount = this.dash.deliveryCount;
        this.orderProgress = Math.floor(100 - (((this.orderProgress - this.deliveryCount) / this.orderProgress) * 100))
        // Employee Count
        // Total active employee
        for (let i = 0; i < this.dash.employee.length; i++) {
          if (this.dash.employee[i]['active' as keyof Object] != this.dash.employee[0]['active' as keyof Object]) {
            this.count1 = Math.floor(this.count1 + 1);
          }
        }
        this.employeeCount = this.count1;
        console.log(this.employeeCount)
        this.count1 = 0;
        // Employee and delivery separation  
        for (let i = 0; i < this.dash.employee.length; i++) {
          if (this.dash.employee[i]['role_id' as keyof Object] == this.dash.employee[0]['role_id' as keyof Object] && this.dash.employee[i]['active' as keyof Object] != this.dash.employee[0]['active' as keyof Object]) {
            this.count1 = Math.floor(this.count1 + 1);
          }
        }
        this.employeeCount = Math.floor(100 - ((this.employeeCount - this.count1) / this.employeeCount) * 100)
        
        // product Count
        this.rpmr[0] =Math.floor( (this.dash.productCategory.length * 24.12)/2);
        this.stockdata[0] =  this.rpmr[0] ;
        this.saleskdata[0] = this.rpmr[0] / 1.3;
        // Filled Product
        this.rpmr[1] = Math.floor( (this.dash.filledProduct.length * 15.3)/2) ;
        this.stockdata[1] =  this.rpmr[1] ;
        this.saleskdata[1] = this.rpmr[1] / 1.3;
        // Unfilled Product
        this.rpmr[2] = Math.floor((this.dash.unfilledProducts.length * 13.3)/2);
        this.stockdata[2] =  this.rpmr[2] ;
        this.saleskdata[2] = this.rpmr[2] / 1.3;
        // console.log(this.productCount)

        this.componentLoading = false;
      },
      error: (err) => {
        this.toaster.error(err.message)
      }
    })
  }
  customerConvert() {
    this.exportAsExcelFile(this.dash.customer, "customer-data");
  }
  orderConvert() {
    this.exportAsExcelFile(this.dash.order, "order-data");
  }
  deliveryConvert() {
    this.exportAsExcelFile(this.dash.delivery, "delivery-data");
  }

  public exportAsExcelFile(json: any[], excelFileName: string): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });
    this.saveAsExcelFile(excelBuffer, excelFileName);
  }
  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  }

}
