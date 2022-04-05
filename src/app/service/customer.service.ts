import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

  constructor(private httpClient: HttpClient) { }

  //login api
  login(customerCredential: LoginRequest) {
    return this.httpClient.post<Response>(`${env.baseUrl}/customer/login`, customerCredential)
  }

  //Signup Api
  Signup(customerDetails: Customer) {
    return this.httpClient.post<Response>(`${env.baseUrl}/customer/addnewcustomer`, customerDetails)
  }

  //get all types api
  GetAllTypes() {
    return this.httpClient.get<Response>(`${env.baseUrl}/type/getalltypes`)
  }

  //get all product categories api
  GetAllProductCategories() {
    return this.httpClient.get<Response>(`${env.baseUrl}/productcategory/getallproductcategories`)
  }

  //get a single product category by product category id
  GetProductCategoryById(productCategoryId: string) {
    return this.httpClient.get<Response>(`${env.baseUrl}/filledproduct/GetFilledProductByProductCategoryId/${productCategoryId}`)
  }

  //get address of a single customer
  GetAddressByCustomerId(customerId: string) {
    return this.httpClient.get<Response>(`${env.baseUrl}/address/GetAddressByCustomerId/${customerId}`)
  }

  //add a new address
  AddNewAddress(address: Address) {
    return this.httpClient.post<Response>(`${env.baseUrl}/address/AddNewCustomerAddress`, address);
  }

  //delete address
  DeleteAddress(addressId: string) {
    return this.httpClient.delete<Response>(`${env.baseUrl}/address/DeleteCustomerAddress/${addressId}`);
  }

  //add a new order
  AddNewOrder(order: Order) {
    return this.httpClient.post<Response>(`${env.baseUrl}/order/addneworder`, {
      customerId: order.customerId,
      orderTotalprice: order.orderTotalprice,
      filledProductId: order.filledProductId,
      addressId: order.addressId
    })
  }


}
