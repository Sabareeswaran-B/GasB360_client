import { Component, OnInit } from '@angular/core';
import { DeliveryService } from 'src/app/service/delivery.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import Order from 'src/app/model/order.model';
import { MenuItem, PrimeNGConfig } from 'primeng/api';



@Component({
  selector: 'app-delivery-dashboard',
  templateUrl: './delivery-dashboard.component.html',
  styleUrls: ['./delivery-dashboard.component.css']
})
export class DeliveryDashboardComponent implements OnInit {
  collapedSideBar!: boolean;
  graphdata!:any;

  constructor(private service: DeliveryService,
    private router: Router, private aservice: AuthService, private primengConfig: PrimeNGConfig) { }

  OrderList: any = [];
  DeliveryOrderList: any = [];
  TotalOrders: number = 0;
  TotalDeliveryOrder: number = 0;
  progress : boolean = true;
  data: any;
  chartOptions: any;
  totalOrder: number[] = [0,0]
 arrdata:number[]=[6, 8,7, 0];
 arrdata2 :number[] = [12, 23, 11, 0];

  basicData: any;
  basicData2: any;
  multiAxisData: any;
  multiAxisOptions: any;
  lineStylesData: any;
  basicOptions: any;

  // basicData: any;
  // horizontalOptions: any;

  ngOnInit(): void {
    var id = localStorage.getItem('id');
    this.refreshOrderList(id);
    this.deliveredOrderList(id);
    this.primengConfig.ripple = true;
    this.data = {
      labels: ['Pending','Delivered'],
      datasets: [
          {
              data: this.totalOrder,
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
            label: 'Total customer delivered in this month ',
            data: this.arrdata,
            fill: false,
            borderColor: '#EDC126',
            tension: .3
        }
    ]
};

this.basicData2 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
      {
          label: 'Total Orders taken for this month',
          data: this.arrdata2,
          fill: false,
          borderColor: '#FFA726',
          tension: .4
      }
  ]
};

this.basicOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: 'black'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: 'black'
                    },
                    grid: {
                        color: 'rgba(255,255,255,0.2)'
                    }
                },
                y: {
                    ticks: {
                        color: 'black'
                    },
                    grid: {
                        color: 'rgba(255,255,255,0.2)'
                    }
                }
            }
        };

  }
  receiveCollapsed($event: boolean) {
    this.collapedSideBar = $event;
  }

  employeeMenuItems: MenuItem[] = [
    { label: 'Dashboard', icon: 'pi pi-th-large', routerLink: '/delivery/dashboard' },
    { label: 'Order', icon: 'pi pi-star', routerLink: '/delivery/ordersbyemployee' },
    { label: 'Delivery', icon: 'pi pi-user', routerLink: '/delivery/deliveredorders' },
    { label: 'Logout', icon: 'k-icon k-i-undo', routerLink: '/login' }
  ];

  refreshOrderList(id: any) {
    this.service.getOrderByEmployeeId(id).subscribe({
      next: (response) => {
        this.TotalOrders = response.data.length;
        this.OrderList = response.data as Order[];
        this.graphdata = response['data' as keyof Object] as unknown as Order[];
        this.totalOrder[0] = this.TotalOrders;
        this.arrdata2[3] = this.TotalOrders;
        // console.log( this.OrderList.cu)
        // console.log(this.graphdata)

      },
      error: (error) => {
        console.log(error)
      }
    });
  }

  getAllcustomer(){

  }
  deliveredOrderList(id: any) {
    this.service.GetDeliveriesByEmployeeId(id).subscribe({
      next: (response) => {
        // console.log(response.data.length)
        this.TotalDeliveryOrder = response.data.length;
        this.DeliveryOrderList = response.data as Order[];
        // this.graphdata = response['data' as keyof Object] as unknown as Order[];
        this.progress= false;
        this.totalOrder[1] = this.TotalDeliveryOrder;
        this.arrdata[3] = this.TotalDeliveryOrder;
        // console.log( this.DeliveryOrderList.customer)
      },
      error: (error) => {
        console.log(error)
      }
    });
  }

}
