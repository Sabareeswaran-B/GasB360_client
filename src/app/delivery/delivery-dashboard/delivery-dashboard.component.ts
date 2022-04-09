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

  constructor(private service: DeliveryService,
    private router: Router, private aservice: AuthService, private primengConfig: PrimeNGConfig) { }

  OrderList: any = [];
  DeliveryOrderList: any = [];
  TotalOrders: number = 0;
  TotalDeliveryOrder: number = 0;
  progress : boolean = true;

  ngOnInit(): void {
    var id = localStorage.getItem('id');
    this.refreshOrderList(id);
    this.deliveredOrderList(id);
    this.primengConfig.ripple = true;
  }
  receiveCollapsed($event: boolean) {
    this.collapedSideBar = $event;
  }

  adminMenuItems: MenuItem[] = [
    { label: 'Dashboard', icon: 'pi pi-th-large', routerLink: '/admin/dashboard' },
    { label: 'Drained', icon: 'pi pi-book', routerLink: '/admin/unfilledproduct' },
    { label: 'Infused ', icon: 'pi pi-book', routerLink: '/admin/filledproduct' },
    { label: 'Employee', icon: 'pi pi-id-card', routerLink: '/admin/employee' },
    { label: 'Connection', icon: 'pi pi-user', routerLink: '/admin/connection' },
    { label: 'Product', icon: 'pi pi-star', routerLink: '/admin//productcategory' },
    { label: 'Logout', icon: 'k-icon k-i-undo', routerLink: '/login' },
  ];
  employeeMenuItems: MenuItem[] = [
    { label: 'Dashboard', icon: 'pi pi-th-large', routerLink: '/delivery/dashboard' },
    { label: 'Delivery', icon: 'pi pi-user', routerLink: '/delivery/deliveredorders' },
    { label: 'Order', icon: 'pi pi-star', routerLink: '/delivery/ordersbyemployee' },
    { label: 'Logout', icon: 'k-icon k-i-undo', routerLink: '/login' },
  ];

LoadOrder(){
  this.service.GetDeliveriesByEmployeeId
}
  refreshOrderList(id: any) {
    this.service.getOrderByEmployeeId(id).subscribe({
      next: (response) => {
        this.TotalOrders = response.data.length;
        this.OrderList = response.data as Order[];
        console.log(this.OrderList)

      },
      error: (error) => {
        console.log(error)
      }
    });
  }
  deliveredOrderList(id: any) {
    this.service.GetDeliveriesByEmployeeId(id).subscribe({
      next: (response) => {
        console.log(response.data.length)
        this.TotalDeliveryOrder = response.data.length;
        this.DeliveryOrderList = response.data as Order[];
        this.progress= false;
      },
      error: (error) => {
        console.log(error)
      }
    });
  }

}
