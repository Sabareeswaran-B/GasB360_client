import { Component, OnInit } from '@angular/core';
import { DeliveryService } from 'src/app/service/delivery.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import Order from 'src/app/model/order.model';
import { PrimeNGConfig } from 'primeng/api';



@Component({
  selector: 'app-delivery-dashboard',
  templateUrl: './delivery-dashboard.component.html',
  styleUrls: ['./delivery-dashboard.component.css']
})
export class DeliveryDashboardComponent implements OnInit {

  constructor(private service: DeliveryService,
    private router: Router, private aservice:AuthService,private primengConfig: PrimeNGConfig) { }

    OrderList:any=[];
    DeliveryOrderList:any=[];
    TotalOrders:number=0;
    TotalDeliveryOrder:number=0;

    ngOnInit(): void {
      var id = localStorage.getItem('id');
      this.refreshOrderList(id);
      this.deliveredOrderList(id);
      this.primengConfig.ripple = true;
    }
    refreshOrderList(id:any){
      this.service.getOrderByEmployeeId(id).subscribe({
        next: (response) => {
          // console.log(response.data.length)
          this.TotalOrders=response.data.length;
          this.OrderList=response.data as Order[];

        },
        error: (error) => {
          console.log(error)
        }
      });
    }
    deliveredOrderList(id:any){
      this.service.GetDeliveriesByEmployeeId(id).subscribe({
        next: (response) => {
          console.log(response.data.length)
          this.TotalDeliveryOrder=response.data.length;
          this.DeliveryOrderList=response.data as Order[];
        },
        error: (error) => {
          console.log(error)
        }
      });
    }

}
