import { Component, OnInit } from '@angular/core';
import { DeliveryService } from 'src/app/service/delivery.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import Order from 'src/app/model/order.model';
import { MenuItem, PrimeNGConfig } from 'primeng/api';
import { ToastrService } from 'ngx-toastr';
import { debounce } from 'lodash';

@Component({
  selector: 'app-delivery-orders',
  templateUrl: './delivery-orders.component.html',
  styleUrls: ['./delivery-orders.component.css']
})

export class DeliveryOrdersComponent implements OnInit {
  collapedSideBar!: boolean;
  constructor(private service: DeliveryService,
    private router: Router, private aservice: AuthService,
    private primengConfig: PrimeNGConfig,
    private toaster: ToastrService
  ) {

  }
  OrderList: any = [];
  displayMaximizable!: boolean;
  orderid: any;
  progress: boolean = true;

  CustomerNameFilter: string = "";
  OrderListWithoutFilter: any = [];


  ngOnInit(): void {
    var id = localStorage.getItem('id');
    this.refreshOrderList(id);
    this.primengConfig.ripple = true;

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

  //Get Orders Which is Yet To Be Delivered
  refreshOrderList(id: any) {
    this.service.getOrderByEmployeeId(id).subscribe({
      next: (response) => {
        console.log(response.data)
        this.OrderList = response.data as Order[];
        this.OrderListWithoutFilter = response.data as Order[];
        this.progress = false;

      },
      error: (error) => {
        console.log(error)
      }
    });
  }

  //Debounce Function
  FilterFn = debounce(this.search, 400)

  search() {
    console.log(this.CustomerNameFilter);
    var CustomerNameFilter = this.CustomerNameFilter;

    this.OrderList = this.OrderListWithoutFilter.filter(function (el: any) {
      return el.customer.customerName.toString().toLowerCase().includes(
        CustomerNameFilter.toString().trim().toLowerCase()
      )
    });
  }

  showMaximizableDialog(orderid: any) {
    this.displayMaximizable = true;
    this.orderid = orderid;
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/ login']);
  }
  //Check Otp Is Same
  onClickSubmit(data: any) {

    this.service.OrderDeliveryCheckByOtp(this.orderid, data.otp).subscribe({
      next: (response) => {
        this.toaster.success(response.message);
        this.router.navigate(['/delivery/deliveredorders']);
      },
      error: (error) => {
        this.toaster.error(error.error.message);
      }
    });
  }



}
function ms(getData: () => void, ms: any) {
  throw new Error('Function not implemented.');
}

