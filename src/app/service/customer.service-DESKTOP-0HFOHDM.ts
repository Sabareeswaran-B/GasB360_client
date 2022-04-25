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

  constructor(private httpClient: HttpClient) {
  }

  //login api
  login(customerCredential: LoginRequest) {
    return this.httpClient
    .post<Response>(`${env.baseUrl}/customer/login`, customerCredential)
  }

  //Signup Api
  Signup(customerDetails: Customer) {
    return this.httpClient
      .post<Response>(`${env.baseUrl}/customer/addnewcustomer`, customerDetails)
  }

  //get all types api
  GetAllTypes() {
    return this.httpClient
      .get<Response>(`${env.baseUrl}/type/getalltypes`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
  }

  //get all product categories api
  GetAllProductCategories() {
    return this.httpClient
      .get<Response>(`${env.baseUrl}/productcategory/getallproductcategories`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
  }

  //get a single product category by product category id
  GetProductCategoryById(productCategoryId: string) {
    return this.httpClient
      .get<Response>(`${env.baseUrl}/filledproduct/GetFilledProductByProductCategoryId/${productCategoryId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
  }

  //get address of a single customer
  GetAddressByCustomerId(customerId: string) {
    return this.httpClient
      .get<Response>(`${env.baseUrl}/address/GetAddressByCustomerId/${customerId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
  }

  //add a new address
  AddNewAddress(address: Address) {
    return this.httpClient
      .post<Response>(`${env.baseUrl}/address/AddNewCustomerAddress`, address,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
  }

  //delete address
  DeleteAddress(addressId: string) {
    return this.httpClient
      .delete<Response>(`${env.baseUrl}/address/DeleteCustomerAddress/${addressId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
  }

  //order payment gateway
  CheckoutStipe(order: Order) {
    return this.httpClient
      .post<Response>(`${env.baseUrl}/create-checkout-session`, {
        customerId: order.customerId,
        orderTotalprice: order.orderTotalprice,
        filledProductId: order.filledProductId,
        addressId: order.addressId
      },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
  }

  //Order add new
  AddNewOrder(order: Order) {
    console.log(order)
    return this.httpClient
      .post<Response>(`${env.baseUrl}/order/addneworder`, {
        customerId: order.customerId,
        orderTotalprice: order.orderTotalprice,
        filledProductId: order.filledProductId,
        addressId: order.addressId
      },
        {
          headers:
          {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
  }

  //update customer profile image
  UpdateCustomerImage(formData: FormData, customerId: string) {
    return this.httpClient
      .put<Response>(`${env.baseUrl}/customer/UpdateCustomerImage/${customerId}`, formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
  }


  //get customer by customer id
  GetCustomerById(customerId: string) {
    return this.httpClient
      .get<Response>(`${env.baseUrl}/customer/getcustomerbyid/${customerId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
  }


  //get orders by customer id with pagination
  GetOrdersByCustomerId(customerId: string, pageNumber: number) {
    return this.httpClient
      .get<Response>(`${env.baseUrl}/order/GetOrdersByCustomerIdWithPagination/${customerId}/${pageNumber}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
  }

  //get all orders by customer id
  GetAllOrdersByCustomerId(customerId: string) {
    return this.httpClient
      .get<Response>(`${env.baseUrl}/order/GetOrdersByCustomerId/${customerId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
  }


  //update customer by customer id
  UpdateCustomer(customerId: string, customer: Customer) {
    let data: any = customer;
    data.customerConnection = customer.customerConnection.toString();
    data.allowedLimit = customer.allowedLimit.toString();
    return this.httpClient
      .put<Response>(`${env.baseUrl}/customer/UpdateCustomer/${customerId}`, customer,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
  }

  //request connection
  RequestConnection(customerId: string) {
    return this.httpClient
      .put<Response>(`${env.baseUrl}/customer/RequestConnection/${customerId}`, {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
  }

}
