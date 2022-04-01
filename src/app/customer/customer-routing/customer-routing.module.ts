import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CustomerLoginComponent } from '../customer-login/customer-login.component';


const routes: Routes = [
  {path: "login", component: CustomerLoginComponent, pathMatch: "prefix"}
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes),],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
