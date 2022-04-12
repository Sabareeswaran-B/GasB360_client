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
    return this.http
      .get(`${environment.baseUrl}/Employee/GetAllEmployees`,
        {
          headers:
          {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
  }
  AddNewEmployee(Employee_data: any) {
    return this.http
      .post(`${environment.baseUrl}/Employee/AddNewEmployee`,
        Employee_data,
        {
          headers:
          {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
  }
  UpdateEmployee(Employee_data: any, EmployeeId: number) {
    return this.http
      .put(`${environment.baseUrl}/Employee/UpdateEmployee/` + EmployeeId, Employee_data,
        {
          headers:
          {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
  }
  DeleteEmployee(EmployeeId: string) {
    return this.http
      .delete(`${environment.baseUrl}/Employee/DeleteEmployee/` + EmployeeId,
        {
          headers:
          {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
  }


  // Product Category 
  GetAllProductCategories() {
    return this.http
      .get(`${environment.baseUrl}/ProductCategory/GetAllProductCategories`,
        {
          headers:
          {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
  }
  AddProductCategory(NewProduct: any) {
    return this.http
      .post(`${environment.baseUrl}/ProductCategory/AddProductCategory`, NewProduct,
        {
          headers:
          {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
  }
  UpdateProductCategory(Product: any, ProductId: number) {
    return this.http
      .put(`${environment.baseUrl}/ProductCategory/UpdateProductCategory/` + ProductId, Product,
        {
          headers:
          {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
  }
  DeleteProductCategory(Product: string) {
    return this.http
      .delete(`${environment.baseUrl}/ProductCategory/DeleteProductCategory/` + Product,
        {
          headers:
          {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
  }

  // Filled Product Category
  GetAllFilledProducts() {
    return this.http
      .get(`${environment.baseUrl}/FilledProduct/GetAllFilledProducts`,
        {
          headers:
          {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
  }
  AddNewFilledProduct(Filled: any) {
    return this.http
      .post(`${environment.baseUrl}/FilledProduct/AddNewFilledProduct`, Filled,
        {
          headers:
          {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
  }
  AddFilledProductStock(filledIncrease: string, filledId: string) {
    return this.http
      .put(`${environment.baseUrl}/FilledProduct/AddFilledProductStock/${filledIncrease}/${filledId}`, {},
        {
          headers:
          {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
  }
  RemoveFilledProductStock(filledDecrease: string, filledId: string) {
    return this.http
      .put(`${environment.baseUrl}/FilledProduct/RemoveFilledProductStock/${filledDecrease}/${filledId}`, {},
        {
          headers:
          {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
  }
  UpdateFilledProduct(filledProduct: any, filledId: number) {
    return this.http
      .put(`${environment.baseUrl}/FilledProduct/UpdateFilledProduct/` + filledId, filledProduct,
        {
          headers:
          {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
  }
  DeleteFilledProduct(filledId: string) {
    return this.http
      .delete(`${environment.baseUrl}/FilledProduct/DeleteFilledProduct/` + filledId,
        {
          headers:
          {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
  }

  // Unfilled Product Category
  GetAllUnfilledProducts() {
    return this.http
      .get(`${environment.baseUrl}/UnfilledProduct/GetAllUnfilledProducts`,
        {
          headers:
          {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
  }
  AddNewUnfilledProduct(Filled: any) {
    return this.http
      .post(`${environment.baseUrl}/UnfilledProduct/AddNewUnfilledProduct`, Filled,
        {
          headers:
          {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
  }
  AddUnfilledProductStock(unfilledIncrease: string, unfilledId: string) {
    return this.http
      .put(`${environment.baseUrl}/UnfilledProduct/AddUnfilledProductStock/${unfilledIncrease}/${unfilledId}`, {},
        {
          headers:
          {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
  }
  RemoveUnfilledProductStock(unfilledDecrease: string, unfilledId: string) {
    return this.http
      .put(`${environment.baseUrl}/UnfilledProduct/RemoveUnfilledProductStock/${unfilledDecrease}/${unfilledId}`, {},
        {
          headers:
          {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
  }
  UpdateUnfilledProduct(unfilledProduct: any, unfilledId: number) {
    return this.http
      .put(`${environment.baseUrl}/UnfilledProduct/UpdateUnfilledProduct/` + unfilledId, unfilledProduct,
        {
          headers:
          {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
  }
  DeleteUnfilledProduct(unfilledId: string) {
    return this.http
      .delete(`${environment.baseUrl}UnfilledProduct/DeleteUnfilledProduct/` + unfilledId,
        {
          headers:
          {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
  }

  // Connection Request from Customer
  GetAllConnectionRequests() {
    return this.http
      .get<Response>(`${environment.baseUrl}/Employee/GetAllConnectionRequests`,
        {
          headers:
          {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
  }
  AcceptCustomerConnection(customerId: string) {
    return this.http
      .put(`${environment.baseUrl}/Employee/AcceptCustomerConnection/${customerId}`, {},
        {
          headers:
          {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
  }
  RejectCustomerConnection(customerId: string) {
    return this.http
      .put(`${environment.baseUrl}/Employee/RejectCustomerConnection/${customerId}`, {},
        {
          headers:
          {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
  }

  // 
  GetAdminDashboard() {
    return this.http
      .get<Response>(`${environment.baseUrl}/DashBoard/GetAdminDashboard`,
        {
          headers:
          {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
  }

  // Roles
  GetAllRoles() {
    return this.http
      .get(`${environment.baseUrl}/Role/GetAllRoles`,
        {
          headers:
          {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
  }

  // Type
  GetAllTypes() {
    return this.http
      .get(`${environment.baseUrl}/Type/GetAllTypes`,
        {
          headers:
          {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
  }

  // Branch
  GetAllBranches() {
    return this.http
      .get(`${environment.baseUrl}/Branch/GetAllBranches`,
        {
          headers:
          {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
  }

}

