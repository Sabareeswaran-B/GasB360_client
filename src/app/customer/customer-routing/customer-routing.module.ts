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
import { PlaceOrderComponent } from '../place-order/place-order.component';
import { OrderIndexComponent } from '../order-index/order-index.component';


const routes: Routes = [
  { path: "", component: DashboardComponent,canActivate: [AuthGuard] },
  { path: "customer/login", component: CustomerLoginComponent },
  { path: "customer/signup", component: CustomerSignupComponent },
  { path: "customer/profile", component: ProfileComponent, canActivate: [AuthGuard] },
  { path: "customer/products", component: ProductIndexComponent, canActivate: [AuthGuard] },
  { path: "customer/products/:id", component: ProductDetailsComponent, canActivate: [AuthGuard] },
  { path: "customer/order/address", component: AddressIndexComponent, canActivate: [AuthGuard] },
  { path: "customer/order", component: PlaceOrderComponent, canActivate: [AuthGuard] },
  { path: "customer/orders", component: OrderIndexComponent, canActivate: [AuthGuard] },
  { path: "customer/orders/:id", component: PlaceOrderComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes),],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
