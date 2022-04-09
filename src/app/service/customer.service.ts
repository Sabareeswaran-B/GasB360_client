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

<<<<<<< HEAD
  constructor(private httpClient: HttpClient) {
=======
  constructor(private httpClient: HttpClient, private cookie: CookieService) {
    var token = localStorage.getItem('token')!;
    this.httpHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
>>>>>>> 8b853ec716387c9c8240e4249ea2d90191ca1a6f
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
<<<<<<< HEAD
    return this.httpClient.get<Response>(`${env.baseUrl}/type/getalltypes`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
=======
    return this.httpClient.get<Response>(`${env.baseUrl}/type/getalltypes`, { headers: this.httpHeader })
>>>>>>> 8b853ec716387c9c8240e4249ea2d90191ca1a6f
  }

  //get all product categories api
  GetAllProductCategories() {
<<<<<<< HEAD
    return this.httpClient.get<Response>(`${env.baseUrl}/productcategory/getallproductcategories`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
=======
    return this.httpClient.get<Response>(`${env.baseUrl}/productcategory/getallproductcategories`, { headers: this.httpHeader })
>>>>>>> 8b853ec716387c9c8240e4249ea2d90191ca1a6f
  }

  //get a single product category by product category id
  GetProductCategoryById(productCategoryId: string) {
<<<<<<< HEAD
    return this.httpClient.get<Response>(`${env.baseUrl}/filledproduct/GetFilledProductByProductCategoryId/${productCategoryId}`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
=======
    return this.httpClient.get<Response>(`${env.baseUrl}/filledproduct/GetFilledProductByProductCategoryId/${productCategoryId}`, { headers: this.httpHeader })
>>>>>>> 8b853ec716387c9c8240e4249ea2d90191ca1a6f
  }

  //get address of a single customer
  GetAddressByCustomerId(customerId: string) {
<<<<<<< HEAD
    return this.httpClient.get<Response>(`${env.baseUrl}/address/GetAddressByCustomerId/${customerId}`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
=======
    return this.httpClient.get<Response>(`${env.baseUrl}/address/GetAddressByCustomerId/${customerId}`, { headers: this.httpHeader })
>>>>>>> 8b853ec716387c9c8240e4249ea2d90191ca1a6f
  }

  //add a new address
  AddNewAddress(address: Address) {
<<<<<<< HEAD
    return this.httpClient.post<Response>(`${env.baseUrl}/address/AddNewCustomerAddress`, address, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
=======
    return this.httpClient.post<Response>(`${env.baseUrl}/address/AddNewCustomerAddress`, address, { headers: this.httpHeader });
>>>>>>> 8b853ec716387c9c8240e4249ea2d90191ca1a6f
  }

  //delete address
  DeleteAddress(addressId: string) {
<<<<<<< HEAD
    return this.httpClient.delete<Response>(`${env.baseUrl}/address/DeleteCustomerAddress/${addressId}`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
=======
    return this.httpClient.delete<Response>(`${env.baseUrl}/address/DeleteCustomerAddress/${addressId}`, { headers: this.httpHeader });
>>>>>>> 8b853ec716387c9c8240e4249ea2d90191ca1a6f
  }

  //order payment gateway
  CheckoutStipe(order: Order) {
    return this.httpClient.post<Response>(`${env.baseUrl}/create-checkout-session`, {
      customerId: order.customerId,
      orderTotalprice: order.orderTotalprice,
      filledProductId: order.filledProductId,
      addressId: order.addressId
<<<<<<< HEAD
    }, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
=======
    }, { headers: this.httpHeader })
>>>>>>> 8b853ec716387c9c8240e4249ea2d90191ca1a6f
  }

  //Order add new
  AddNewOrder(order: Order) {
    console.log(order)
    return this.httpClient.post<Response>(`${env.baseUrl}/order/addneworder`, {
      customerId: order.customerId,
      orderTotalprice: order.orderTotalprice,
      filledProductId: order.filledProductId,
      addressId: order.addressId
<<<<<<< HEAD
    }, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
=======
    }, { headers: this.httpHeader })
>>>>>>> 8b853ec716387c9c8240e4249ea2d90191ca1a6f
  }

  //update customer profile image
  UpdateCustomerImage(formData: FormData, customerId: string) {
<<<<<<< HEAD
    return this.httpClient.put<Response>(`${env.baseUrl}/customer/UpdateCustomerImage/${customerId}`, formData, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
=======
    return this.httpClient.put<Response>(`${env.baseUrl}/customer/UpdateCustomerImage/${customerId}`, formData, { headers: this.httpHeader });
>>>>>>> 8b853ec716387c9c8240e4249ea2d90191ca1a6f
  }


  //get customer by customer id
  GetCustomerById(customerId: string) {
<<<<<<< HEAD
    return this.httpClient.get<Response>(`${env.baseUrl}/customer/getcustomerbyid/${customerId}`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
  }


  //get orders by customer id with pagination
  GetOrdersByCustomerId(customerId: string, pageNumber: number) {
    return this.httpClient.get<Response>(`${env.baseUrl}/order/GetOrdersByCustomerIdWithPagination/${customerId}/${pageNumber}`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
=======
    return this.httpClient.get<Response>(`${env.baseUrl}/customer/getcustomerbyid/${customerId}`, { headers: this.httpHeader })
>>>>>>> 8b853ec716387c9c8240e4249ea2d90191ca1a6f
  }

  //get all orders by customer id
  GetAllOrdersByCustomerId(customerId: string) {
    return this.httpClient.get<Response>(`${env.baseUrl}/order/GetOrdersByCustomerId/${customerId}`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
  }


  //update customer by customer id
  UpdateCustomer(customerId: string, customer: Customer) {
    let data: any = customer;
    data.customerConnection = customer.customerConnection.toString();
    data.allowedLimit = customer.allowedLimit.toString();
    return this.httpClient.put<Response>(`${env.baseUrl}/customer/UpdateCustomer/${customerId}`, customer, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
  }

  //request connection
  RequestConnection(customerId: string) {
    return this.httpClient.put<Response>(`${env.baseUrl}/customer/RequestConnection/${customerId}`, {}, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
  }

}
