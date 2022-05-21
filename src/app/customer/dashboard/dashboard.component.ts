import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import Customer from 'src/app/model/customer.model';
import Order from 'src/app/model/order.model';
import ProductCategory from 'src/app/model/product-category.model';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  customerLoading: boolean = true;
  orderLoading: boolean = true;
  customerId!: string;
  customer!: Customer;
  orders!: Order[];
  subscriptions: Subscription[] = [];
  nextOrderDate: Date = new Date();
  linechartDate: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  barChartPrice: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  products: ProductCategory[] = [];
  dateDifference = 0;

  constructor(private customerService: CustomerService, private toastr: ToastrService) { }
  lineGraphData: any;
  barGraphData: any;
  barGraphOptions: any;

  ngOnInit(): void {
    this.customerId = localStorage.getItem('id')!;
    this.GetCustomerById()
    this.getAllOrdersByCustomerId()
    this.getAllProductCategories()
  }

  ngOnDestroy(): void {
    this.subscriptions.map((x) => {
      if (!x.closed) {
        x.unsubscribe();
      }
    })
  }

  GetCustomerById() {
    var subscription = this.customerService.GetCustomerById(this.customerId).subscribe({
      next: (response) => {
        this.customer = response.data as Customer
        this.customerLoading = false
      },
      error: (error) => {
        console
      }
    });
    this.subscriptions.push(subscription);
  }

  getAllOrdersByCustomerId() {
    var subscription = this.customerService.GetAllOrdersByCustomerId(this.customerId).subscribe({
      next: (response) => {
        this.orders = response.data as Order[];
        if (this.orders.length > 0) {
          // this.nextOrderDate.setDate(new Date(this.orders[0].orderDate).getDate() + 30)
          this.dateDifference = this.calculateDiff(new Date(this.orders[0].orderDate));
        }
        this.orderLoading = false;
        this.orders.forEach((order) => {
          let index: number = new Date(order.orderDate).getMonth();
          this.linechartDate[index] += 1;
          this.barChartPrice[index] += order.orderTotalprice;
        })
        this.lineGraphData = {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
          datasets: [
            {
              label: 'No. of orders per month',
              data: this.linechartDate,
              fill: false,
              borderColor: '#6280ff',
              tension: .4
            }
          ]
        };
        this.barGraphData = {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
          datasets: [
            {
              label: 'Monthly Expenditure',
              data: this.barChartPrice,
              fill: false,
              borderColor: '#6280ff',
              backgroundColor: '#6280ff',
              tension: .4
            }
          ]
        };
      },
      error: (error) => {
        console.log(error)
      }
    });
    this.subscriptions.push(subscription);
  }

  calculateDiff(dateSent: Date) {
    let currentDate = new Date();
    var dateDifference = Math.floor(
      (
        currentDate.getTime()
        - dateSent.getTime()
      ) / (1000 * 60 * 60 * 24)
    );
    return dateDifference <= 30 ? 30 - dateDifference : 0
  }

  getAllProductCategories() {
    var subscription = this.customerService.GetAllProductCategories().subscribe({
      next: (response) => {
        this.products = response.data as ProductCategory[];
      },
      error: (error) => {
        console.log(error);
      }
    });
    this.subscriptions.push(subscription);
  }

  requestConnection() {
    var subscription = this.customerService.RequestConnection(this.customerId).subscribe({
      next: (response) => {
        this.customer.requested = "true";
        this.toastr.success(response.message);
      },
      error: (error) => {
        this.toastr.success(error.error.message);
        console.log(error);
      }
    });
    this.subscriptions.push(subscription);
  }
}


