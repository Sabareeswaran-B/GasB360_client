import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from 'src/environments/environment';
import { LoginRequest } from '../model/login.request';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) { }

  //login api
  login(customerCredential: LoginRequest) {
    return this.httpClient.post(`${env.baseUrl}/customer/login`, customerCredential)
  }

  //get all types api
  GetAllTypes() {
    return this.httpClient.get(`${env.baseUrl}/type/getalltypes`)
  }


}
