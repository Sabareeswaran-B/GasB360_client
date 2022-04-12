import { LogoutComponent } from './../logout/logout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {  EmployeeComponent } from '../employee/employee.component';
import { ProductcategoryComponent } from '../productcategory/productcategory.component';
import { FilledproductComponent } from '../filledproduct/filledproduct.component';
import { UnfilledproductComponent } from '../unfilledproduct/unfilledproduct.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ConnectionrequestComponent } from '../connectionrequest/connectionrequest.component';
import { AuthGuard } from 'src/app/guard/auth.guard';
import { AdminGuard } from 'src/app/guard/admin.guard';




const routes: Routes = [
  {path: "admin/employee", component:EmployeeComponent , pathMatch: "prefix", canActivate: [AuthGuard, AdminGuard]},
  {path: "admin/productcategory", component:ProductcategoryComponent , pathMatch: "prefix", canActivate: [AuthGuard, AdminGuard]},
  {path: "admin/filledproduct", component:FilledproductComponent , pathMatch: "prefix", canActivate: [AuthGuard, AdminGuard]},  
  {path: "admin/unfilledproduct", component:UnfilledproductComponent , pathMatch: "prefix", canActivate: [AuthGuard, AdminGuard]},
  {path: "admin/dashboard", component:DashboardComponent , pathMatch: "prefix", canActivate: [AuthGuard, AdminGuard]},
  {path: "admin/connection", component:ConnectionrequestComponent , pathMatch: "prefix", canActivate: [AuthGuard, AdminGuard]}
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes),],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
