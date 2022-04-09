import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment as env } from 'src/environments/environment';
import Address from '../model/address.model';
import Customer from '../model/customer.model';
import { LoginRequest } from '../model/login.request';
import Order from '../model/order.model';
import Response from '../model/response.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  httpHeader: HttpHeaders = new HttpHeaders();

  constructor(private httpClient: HttpClient, private cookie: CookieService) {
    var token = localStorage.getItem('token')!;
    this.httpHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  //login api
  login(customerCredential: LoginRequest) {
    return this.httpClient.post<Response>(`${env.baseUrl}/customer/login`, customerCredential, { headers: this.httpHeader })
  }

  //Signup Api
  Signup(customerDetails: Customer) {
    return this.httpClient.post<Response>(`${env.baseUrl}/customer/addnewcustomer`, customerDetails, { headers: this.httpHeader })
  }

  //get all types api
  GetAllTypes() {
    return this.httpClient.get<Response>(`${env.baseUrl}/type/getalltypes`, { headers: this.httpHeader })
  }

  //get all product categories api
  GetAllProductCategories() {
    return this.httpClient.get<Response>(`${env.baseUrl}/productcategory/getallproductcategories`, { headers: this.httpHeader })
  }

  //get a single product category by product category id
  GetProductCategoryById(productCategoryId: string) {
    return this.httpClient.get<Response>(`${env.baseUrl}/filledproduct/GetFilledProductByProductCategoryId/${productCategoryId}`, { headers: this.httpHeader })
  }

  //get address of a single customer
  GetAddressByCustomerId(customerId: string) {
    return this.httpClient.get<Response>(`${env.baseUrl}/address/GetAddressByCustomerId/${customerId}`, { headers: this.httpHeader })
  }

  //add a new address
  AddNewAddress(address: Address) {
    return this.httpClient.post<Response>(`${env.baseUrl}/address/AddNewCustomerAddress`, address, { headers: this.httpHeader });
  }

  //delete address
  DeleteAddress(addressId: string) {
    return this.httpClient.delete<Response>(`${env.baseUrl}/address/DeleteCustomerAddress/${addressId}`, { headers: this.httpHeader });
  }

  //order payment gateway
  CheckoutStipe(order: Order) {
    return this.httpClient.post<Response>(`${env.baseUrl}/create-checkout-session`, {
      customerId: order.customerId,
      orderTotalprice: order.orderTotalprice,
      filledProductId: order.filledProductId,
      addressId: order.addressId
    }, { headers: this.httpHeader })
  }

  //Order add new
  AddNewOrder(order: Order) {
    console.log(order)
    return this.httpClient.post<Response>(`${env.baseUrl}/order/addneworder`, {
      customerId: order.customerId,
      orderTotalprice: order.orderTotalprice,
      filledProductId: order.filledProductId,
      addressId: order.addressId
    }, { headers: this.httpHeader })
  }

  //update customer profile image
  UpdateCustomerImage(formData: FormData, customerId: string) {
    return this.httpClient.put<Response>(`${env.baseUrl}/customer/UpdateCustomerImage/${customerId}`, formData, { headers: this.httpHeader });
  }


  //get customer by customer id
  GetCustomerById(customerId: string) {
    return this.httpClient.get<Response>(`${env.baseUrl}/customer/getcustomerbyid/${customerId}`, { headers: this.httpHeader })
  }


}
