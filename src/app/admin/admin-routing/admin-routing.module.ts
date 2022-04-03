import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {  EmployeeComponent } from '../employee/employee.component';
import { ProductcategoryComponent } from '../productcategory/productcategory.component';




const routes: Routes = [
  {path: "employee", component:EmployeeComponent , pathMatch: "prefix"},
  {path: "productcategory", component:ProductcategoryComponent , pathMatch: "prefix"}
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes),],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
