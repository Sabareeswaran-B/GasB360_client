import { Component, OnInit } from '@angular/core';
import { DeliveryService } from 'src/app/service/delivery.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import Order from 'src/app/model/order.model';
import { PrimeNGConfig } from 'primeng/api';
import { debounce } from 'lodash';

@Component({
  selector: 'app-delivery-orders',
  templateUrl: './delivery-orders.component.html',
  styleUrls: ['./delivery-orders.component.css']
})

export class DeliveryOrdersComponent implements OnInit {
  constructor(private service: DeliveryService,
    private router: Router, private aservice:AuthService,private primengConfig: PrimeNGConfig) {

     }
  OrderList:any=[];
  displayMaximizable!: boolean;
  orderid:any;
  progress:boolean=true;

  CustomerNameFilter:string="";
  OrderListWithoutFilter:any=[];


  ngOnInit(): void {
    var id = localStorage.getItem('id');
    this.refreshOrderList(id);
    this.primengConfig.ripple = true;

  }

  //Get Orders Which is Yet To Be Delivered
  refreshOrderList(id:any){
    this.service.getOrderByEmployeeId(id).subscribe({
      next: (response) => {
        console.log(response.data)
        this.OrderList=response.data as Order[];
        this.OrderListWithoutFilter=response.data as Order[];
        this.progress=false;

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

  showMaximizableDialog(orderid:any) {
    this.displayMaximizable = true;
    this.orderid=orderid;
  }

  //Check Otp Is Same
  onClickSubmit(data:any) {

    this.service.OrderDeliveryCheckByOtp(this.orderid,data.otp).subscribe({
      next: (response) => {
        alert(response.message);
        this.router.navigate(['/delivery/deliveredorders']);

      },
      error: (error) => {
        alert(error.error.message);
      }
    });
 }



}
function ms(getData: () => void, ms: any) {
  throw new Error('Function not implemented.');
}

