import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import Order from 'src/app/model/order.model';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit, OnDestroy {

  order!: Order;
  subscriptions: Subscription[] = [];

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private customerService: CustomerService, private toastr: ToastrService) { }

  ngOnDestroy(): void {
    this.subscriptions.map((x) => {
      if (!x.closed) {
        x.unsubscribe();
      }
    })
  }

  ngOnInit(): void {
    var subscription = this.activatedRoute.queryParams.subscribe(params => {
      this.order = params as Order;
      this.placeOrder(params);
    });
    // console.log(this.order);
    this.subscriptions.push(subscription);
  }

  placeOrder(params: any): void {
    var subscription = this.customerService.AddNewOrder(params).subscribe({
      next: (response) => {
        this.toastr.success(response.message);
        this.router.navigate(['/customer/orders'], {replaceUrl: true});
      },
      error: (error) => {
        this.toastr.success(error.error.message);
        this.router.navigate(['/customer/orders/address'], {replaceUrl: true});
      }
    });
    this.subscriptions.push(subscription);
  }

}
