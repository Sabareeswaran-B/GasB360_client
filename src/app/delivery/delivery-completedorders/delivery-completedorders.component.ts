import { Component, OnInit } from '@angular/core';
import { DeliveryService } from 'src/app/service/delivery.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import Order from 'src/app/model/order.model';
import { PrimeNGConfig } from 'primeng/api';

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
    this.refreshOrderList(id);
    this.primengConfig.ripple = true;
  }

  refreshOrderList(id:any){
    this.service.GetDeliveriesByEmployeeId(id).subscribe({
      next: (response) => {
        // console.log(response.data)
        this.OrderList=response.data as Order[];
        this.OrderListWithoutFilter=response.data as Order[];
      },
      error: (error) => {
        console.log(error)
      }
    });
  }

  FilterFn(){
    var CustomerNameFilter = this.CustomerNameFilter;

    this.OrderList = this.OrderListWithoutFilter.filter(function (el:any){

      // console.log(el.order.customer.customerName);

        return el.order.customer.customerName.toString().toLowerCase().includes(
          CustomerNameFilter.toString().trim().toLowerCase()
        )
    });
  }

  sortResult(prop:any,asc:any){
    this.OrderList = this.OrderListWithoutFilter.sort(function(a:any,b:any){
      if(asc){
          return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
      }else{
        return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
      }
    })
  }

}
