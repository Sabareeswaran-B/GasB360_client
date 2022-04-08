import { Component, OnInit } from '@angular/core';
import { DeliveryService } from 'src/app/service/delivery.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import Order from 'src/app/model/order.model';
import { PrimeNGConfig } from 'primeng/api';
import { debounce } from 'lodash';

@Component({
  selector: 'app-delivery-completedorders',
  templateUrl: './delivery-completedorders.component.html',
  styleUrls: ['./delivery-completedorders.component.css']
})
export class DeliveryCompletedordersComponent implements OnInit {

  constructor(private service: DeliveryService,
    private router: Router, private aservice:AuthService,private primengConfig: PrimeNGConfig) { }

  OrderList:any=[];
  CustomerNameFilter:string="";
  OrderListWithoutFilter:any=[];


  ngOnInit(): void {
    var id = localStorage.getItem('id');
    this.deliveredOrderList(id);
    this.primengConfig.ripple = true;
  }
  //Get Orders Delivered By Employee
  deliveredOrderList(id:any){
    this.service.GetDeliveriesByEmployeeId(id).subscribe({
      next: (response) => {
        console.log(response.data)
        this.OrderList=response.data as Order[];
        this.OrderListWithoutFilter=response.data as Order[];
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
         return el.customer.customerName.toString().toLowerCase().includes(
          CustomerNameFilter.toString().trim().toLowerCase()
        )
    });
  }
}
