import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable,catchError, throwError } from 'rxjs';
import { IUser } from 'src/models/IUser';

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

     getAndSetJWTTokenFromLocalStorage() {
      this.token = localStorage.getItem('token')!;

        if (this.token) {
          this.header = new HttpHeaders({
            Authorization: 'Bearer ' + this.token,
          });
        }
    }

    getOrderByEmployeeId(val:any){
      return this.http.get<Response>(environment.apiUrl+'/Order/GetOrderByEmployeeId/'+val,{
        headers: this.header,
      });
    }

    OrderDeliveryCheckByOtp(id:any,inputOTP:any){
      return this.http.get<Response>(environment.apiUrl+'/Order/OrderDeliveryCheckByOtp/'+id+'/'+inputOTP,{
        headers:this.header,
      })
    }

    GetDeliveriesByEmployeeId(id:any){
      return this.http.get<Response>(environment.apiUrl+'/Delivery/GetDeliveriesByEmployeeId/'+id,{
        headers:this.header,
      })
    }
}
