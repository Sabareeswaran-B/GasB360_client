import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import Response from '../model/response.model';
// import Role from '../model/role.model';
// import Employee from 'src/app/model/employee.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  httpHeader: HttpHeaders = new HttpHeaders();
  constructor(private http: HttpClient) {
    var token = localStorage.getItem('token')!;
    this.httpHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  // Employee 
  GetAllEmployees() {
    return this.http.get(`${environment.apiUrl}/Employee/GetAllEmployees`, { headers: this.httpHeader });
  }
  AddNewEmployee(Employee_data: any) {
    return this.http.post(`${environment.apiUrl}/Employee/AddNewEmployee`, Employee_data, { headers: this.httpHeader });
  }
  UpdateEmployee(Employee_data: any, EmployeeId: number) {
    return this.http.put(`${environment.apiUrl}/Employee/UpdateEmployee/` + EmployeeId, Employee_data, { headers: this.httpHeader });
  }
  DeleteEmployee(EmployeeId: string) {
    return this.http.delete(`${environment.apiUrl}/Employee/DeleteEmployee/` + EmployeeId, { headers: this.httpHeader });
  }


  // Product Category 
  GetAllProductCategories() {
    return this.http.get(`${environment.apiUrl}/ProductCategory/GetAllProductCategories`, { headers: this.httpHeader });
  }
  AddProductCategory(NewProduct: any) {
    return this.http.post(`${environment.apiUrl}/ProductCategory/AddProductCategory`, NewProduct, { headers: this.httpHeader });
  }
  UpdateProductCategory(Product: any, ProductId: number) {
    return this.http.put(`${environment.apiUrl}/ProductCategory/UpdateProductCategory/` + ProductId, Product, { headers: this.httpHeader });
  }
  DeleteProductCategory(Product: string) {
    return this.http.delete(`${environment.apiUrl}/ProductCategory/DeleteProductCategory/` + Product, { headers: this.httpHeader })
  }

  // Filled Product Category
  GetAllFilledProducts() {
    return this.http.get(`${environment.apiUrl}/FilledProduct/GetAllFilledProducts`, { headers: this.httpHeader });
  }
  AddNewFilledProduct(Filled: any) {
    return this.http.post(`${environment.apiUrl}/FilledProduct/AddNewFilledProduct`, Filled, { headers: this.httpHeader });
  }
  AddFilledProductStock(filledIncrease: string, filledId: string) {
    return this.http.put(`${environment.apiUrl}/FilledProduct/AddFilledProductStock/${filledIncrease}/${filledId}`, {}, { headers: this.httpHeader });
  }
  RemoveFilledProductStock(filledDecrease: string, filledId: string) {
    return this.http.put(`${environment.apiUrl}/FilledProduct/RemoveFilledProductStock/${filledDecrease}/${filledId}`, {}, { headers: this.httpHeader });
  }
  UpdateFilledProduct(filledProduct: any, filledId: number) {
    return this.http.put(`${environment.apiUrl}/FilledProduct/UpdateFilledProduct/` + filledId, filledProduct, { headers: this.httpHeader });
  }
  DeleteFilledProduct(filledId: string) {
    return this.http.delete(`${environment.apiUrl}/FilledProduct/DeleteFilledProduct/` + filledId, { headers: this.httpHeader });
  }

  // Unfilled Product Category
  GetAllUnfilledProducts() {
    return this.http.get(`${environment.apiUrl}/UnfilledProduct/GetAllUnfilledProducts`, { headers: this.httpHeader });
  }
  AddNewUnfilledProduct(Filled: any) {
    return this.http.post(`${environment.apiUrl}/UnfilledProduct/AddNewUnfilledProduct`, Filled, { headers: this.httpHeader });
  }
  AddUnfilledProductStock(unfilledIncrease: string, unfilledId: string) {
    return this.http.put(`${environment.apiUrl}/UnfilledProduct/AddUnfilledProductStock/${unfilledIncrease}/${unfilledId}`, {}, { headers: this.httpHeader });
  }
  RemoveUnfilledProductStock(unfilledDecrease: string, unfilledId: string) {
    return this.http.put(`${environment.apiUrl}/UnfilledProduct/RemoveUnfilledProductStock/${unfilledDecrease}/${unfilledId}`, {}, { headers: this.httpHeader });
  }
  UpdateUnfilledProduct(unfilledProduct: any, unfilledId: number) {
    return this.http.put(`${environment.apiUrl}/UnfilledProduct/UpdateUnfilledProduct/` + unfilledId, unfilledProduct, { headers: this.httpHeader });
  }
  DeleteUnfilledProduct(unfilledId: string) {
    return this.http.delete(`${environment.apiUrl}UnfilledProduct/DeleteUnfilledProduct/` + unfilledId, { headers: this.httpHeader });
  }

  // Connection Request from Customer
  GetAllConnectionRequests() {
    return this.http.get<Response>(`${environment.apiUrl}/Employee/GetAllConnectionRequests`, { headers: this.httpHeader });
  }
  AcceptCustomerConnection(customerId: string) {
    return this.http.put(`${environment.apiUrl}/Employee/AcceptCustomerConnection/${customerId}`, {}, { headers: this.httpHeader });
  }
  RejectCustomerConnection(customerId: string) {
    return this.http.put(`${environment.apiUrl}/Employee/RejectCustomerConnection/${customerId}`, {}, { headers: this.httpHeader });
  }

  // 
  GetAdminDashboard(){
  return this.http.get<Response>(`${environment.apiUrl}/DashBoard/GetAdminDashboard`, { headers: this.httpHeader });
}

  // Roles
  GetAllRoles() {
    return this.http.get(`${environment.apiUrl}/Role/GetAllRoles`, { headers: this.httpHeader });
  }

  // Type
  GetAllTypes() {
    return this.http.get(`${environment.apiUrl}/Type/GetAllTypes`, { headers: this.httpHeader });
  }

  // Branch
  GetAllBranches() {
    return this.http.get(`${environment.apiUrl}/Branch/GetAllBranches`, { headers: this.httpHeader });
  }

}

