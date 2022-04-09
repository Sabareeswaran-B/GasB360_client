import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import Customer from 'src/app/model/customer.model';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-header-old',
  templateUrl: './header-old.component.html',
  styleUrls: ['./header-old.component.css']
})
export class HeaderOldComponent implements OnInit {

  
  ngOnInit(): void {
    this.customerId = localStorage.getItem('id')!;
    this.getCustomerById();
  }
  
  customerId!: string;
  customer!: Customer;
  subscriptions: Subscription[] = [];
  componentLoading: boolean = true;

  constructor(private customerService: CustomerService,) { }
  
  ngOnDestroy(): void {
    this.subscriptions.map((x) => {
      if (!x.closed) {
        x.unsubscribe();
      }
    })
  }

  getCustomerById() {
    var subscription = this.customerService.GetCustomerById(this.customerId).subscribe({
      next: (response) => {
        this.customer = response.data as Customer;
        this.componentLoading = false;
      },
      error: (error) => {
        console.log(error);
      }
    })
    this.subscriptions.push(subscription);
  }
}
