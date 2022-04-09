import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CookieService } from 'ngx-cookie-service';
<<<<<<< HEAD
import { ToastrService } from 'ngx-toastr';
=======
>>>>>>> 8b853ec716387c9c8240e4249ea2d90191ca1a6f
import { Subscription } from 'rxjs';
import Customer from 'src/app/model/customer.model';
import { profile } from 'src/app/ngrx/profile.action';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {


  customerId!: string;
  customer!: Customer;
  subscriptions: Subscription[] = [];
  componentLoading: boolean = true;

  constructor(
    private customerService: CustomerService, 
    private router: Router,
    private store: Store, 
    private profile: Store<{ profile: Customer }>,
<<<<<<< HEAD
    private cookie: CookieService,
    private toastr: ToastrService
=======
    private cookie: CookieService
>>>>>>> 8b853ec716387c9c8240e4249ea2d90191ca1a6f
    ) { }

  ngOnInit(): void {
    this.customerId = localStorage.getItem('id')!;
    var profileObservable = this.profile.select('profile');
    var subscription = profileObservable.subscribe({
      next: (response) => {
        if (response.customerId == null) {
          this.getCustomerById();
        } else {
          this.customer = response;
          this.componentLoading = false;
        }
      },
      error: (error) => {
        console.log(error)
      }
    });
    this.subscriptions.push(subscription);
  }

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
        this.store.dispatch(profile(this.customer));
        this.componentLoading = false;
      },
      error: (error) => {
        console.log(error);
      }
    })
    this.subscriptions.push(subscription);
  }

  logout() {
    this.router.navigate(['/customer/login'], { replaceUrl: true });
  }

}
