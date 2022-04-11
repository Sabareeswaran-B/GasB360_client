import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import Response from '../model/response.model';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {

  token!: string;

  header!: HttpHeaders;

  constructor(private http: HttpClient,
    private _router: Router) {
      this.getAndSetJWTTokenFromLocalStorage();
     }

     //Get Localstorage Token and Header
     getAndSetJWTTokenFromLocalStorage() {
      this.token = localStorage.getItem('token')!;

        if (this.token) {
          this.header = new HttpHeaders({
            Authorization: 'Bearer ' + this.token,
          });
        }
    }

    //Get Orders By Passing EmployeeId As Parameter
    getOrderByEmployeeId(val:any){
      return this.http.get<Response>(environment.baseUrl+'/Order/GetOrderByEmployeeId/'+val,{
        headers: this.header,
      });
    }

    //Check Order Otp By Passing OrderId and Input Otp As Parameter
    OrderDeliveryCheckByOtp(id:any,inputOTP:any){
      return this.http.get<Response>(environment.baseUrl+'/Order/OrderDeliveryCheckByOtp/'+id+'/'+inputOTP,{
        headers:this.header,
      })
    }

    //Get Delivered Order By Passing EmployeeId As Parameter
    GetDeliveriesByEmployeeId(id:any){
      return this.http.get<Response>(environment.baseUrl+'/Delivery/GetDeliveriesByEmployeeId/'+id, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
    }
}
