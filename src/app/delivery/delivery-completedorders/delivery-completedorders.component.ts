import { Component, OnInit } from '@angular/core';
import { DeliveryService } from 'src/app/service/delivery.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import Order from 'src/app/model/order.model';
import { MenuItem, PrimeNGConfig } from 'primeng/api';
import { debounce } from 'lodash';
import Delivery from 'src/app/model/delivery.model';

@Component({
  selector: 'app-delivery-completedorders',
  templateUrl: './delivery-completedorders.component.html',
  styleUrls: ['./delivery-completedorders.component.css']
})
export class DeliveryCompletedordersComponent implements OnInit {
  collapedSideBar!: boolean;

  constructor(private service: DeliveryService,
    private router: Router, private aservice:AuthService,private primengConfig: PrimeNGConfig) { }

  OrderList:any=[];
  CustomerNameFilter:string="";
  OrderListWithoutFilter:any=[];
  progress: boolean=true;


  ngOnInit(): void {
    var id = localStorage.getItem('id');
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


  //Get Orders Delivered By Employee
  deliveredOrderList(id:any){
    this.service.GetDeliveriesByEmployeeId(id).subscribe({
      next: (response) => {
        console.log(response.data)
        this.OrderList=response.data as Delivery[];
        this.OrderListWithoutFilter=response.data as Delivery[];
        this.progress = false;
      },
      error: (error) => {
        console.log(error)
      }
    });
  }

  //Debounce Function
  FilterFn = debounce(this.search, 400)

  search(){
    console.log(this.CustomerNameFilter);
    var CustomerNameFilter = this.CustomerNameFilter;

    this.OrderList = this.OrderListWithoutFilter.filter(function (el:any){
      console.log(el);
         return el.order.customer.customerName.toString().toLowerCase().includes(
          CustomerNameFilter.toString().trim().toLowerCase()
        )
    });
  }
}
