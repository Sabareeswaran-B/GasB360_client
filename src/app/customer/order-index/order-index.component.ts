import { Component, OnDestroy, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Subscription } from 'rxjs';
import Order from 'src/app/model/order.model';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-order-index',
  templateUrl: './order-index.component.html',
  styleUrls: ['./order-index.component.css']
})
export class OrderIndexComponent implements OnInit, OnDestroy {

  orders!: Order[];
  noOrdersYet: boolean = false;
  pageNumber: number = 1;
  customerId!: string;
  subscriptions: Subscription[] = [];
  items!: MenuItem[];
  home: MenuItem = { icon: "pi pi-home", routerLink: "/customer" };
  componentLoading: boolean = true;
  totalRecords: number = 1;
  shimmerLoading: boolean = true;

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.items = [
      { label: 'Orders', routerLink: "/customer/order" },
    ];
    this.customerId = localStorage.getItem('id')!;
    this.getAllOrdersByCustomerId();
  }

  ngOnDestroy(): void {
    this.subscriptions.map((x) => {
      if (!x.closed) {
        x.unsubscribe();
      }
    })
  }

  onPageChage(event: any) {
    this.shimmerLoading = true;
    this.pageNumber = event.page + 1;
    console.log(event);
    this.getAllOrdersByCustomerId()
  }

  getAllOrdersByCustomerId() {
    var subscription = this.customerService.GetOrdersByCustomerId(this.customerId, this.pageNumber).subscribe({
      next: (response) => {
        this.totalRecords = Number.parseInt(response.message)
        this.orders = response.data as Order[];
        this.componentLoading = false;
        this.shimmerLoading = false;
        if (this.orders.length <= 0) {
          this.noOrdersYet = true;
        }
      },
      error: (error) => {
        console.log(error)
      }
    });
    this.subscriptions.push(subscription);
  }

}
