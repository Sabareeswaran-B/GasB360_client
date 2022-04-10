import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {  EmployeeComponent } from '../employee/employee.component';
import { ProductcategoryComponent } from '../productcategory/productcategory.component';
import { FilledproductComponent } from '../filledproduct/filledproduct.component';
import { UnfilledproductComponent } from '../unfilledproduct/unfilledproduct.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ConnectionrequestComponent } from '../connectionrequest/connectionrequest.component';




const routes: Routes = [
  {path: "admin/employee", component:EmployeeComponent , pathMatch: "prefix"},
  {path: "admin/productcategory", component:ProductcategoryComponent , pathMatch: "prefix"},
  {path: "admin/filledproduct", component:FilledproductComponent , pathMatch: "prefix"},  
  {path: "admin/unfilledproduct", component:UnfilledproductComponent , pathMatch: "prefix"},
  {path: "admin/dashboard", component:DashboardComponent , pathMatch: "prefix"},
  {path: "admin/connection", component:ConnectionrequestComponent , pathMatch: "prefix"}
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes),],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
