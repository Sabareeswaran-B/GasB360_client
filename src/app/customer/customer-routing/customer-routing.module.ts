import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CustomerLoginComponent } from '../customer-login/customer-login.component';
import { CustomerSignupComponent } from '../customer-signup/customer-signup.component';
import { ProductIndexComponent } from '../product-index/product-index.component';
import { AuthGuard } from 'src/app/guard/auth.guard';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { AddressIndexComponent } from '../address-index/address-index.component';
import { ProfileComponent } from '../profile/profile.component';
import { DashboardComponent } from '../dashboard/dashboard.component';


const routes: Routes = [
  { path: "login", component: CustomerLoginComponent },
  { path: "signup", component: CustomerSignupComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "profile", component: ProfileComponent },
  { path: "products", component: ProductIndexComponent, canActivate: [AuthGuard] },
  { path: "products/:id", component: ProductDetailsComponent, canActivate: [AuthGuard] },
  { path: "order/address", component: AddressIndexComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes),],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
