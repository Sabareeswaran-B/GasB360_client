import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CustomerLoginComponent } from '../customer-login/customer-login.component';
import { CustomerSignupComponent } from '../customer-signup/customer-signup.component';


const routes: Routes = [
  {path: "login", component: CustomerLoginComponent},
  {path: "signup", component: CustomerSignupComponent},
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes),],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
