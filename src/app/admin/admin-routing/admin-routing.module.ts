import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {  EmployeeComponent } from '../employee/employee.component';
import { ProductcategoryComponent } from '../productcategory/productcategory.component';
import { FilledproductComponent } from '../filledproduct/filledproduct.component';
import { UnfilledproductComponent } from '../unfilledproduct/unfilledproduct.component';
import { DashboardComponent } from '../dashboard/dashboard.component';




const routes: Routes = [
  {path: "employee", component:EmployeeComponent , pathMatch: "prefix"},
  {path: "productcategory", component:ProductcategoryComponent , pathMatch: "prefix"},
  {path: "filledproduct", component:FilledproductComponent , pathMatch: "prefix"},  
  {path: "unfilledproduct", component:UnfilledproductComponent , pathMatch: "prefix"},
  {path: "dashboard", component:DashboardComponent , pathMatch: "prefix"}
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes),],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
