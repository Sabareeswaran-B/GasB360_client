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
  { path: "login", component: CustomerLoginComponent },
  { path: "signup", component: CustomerSignupComponent },
  { path: "profile", component: ProfileComponent, canActivate: [AuthGuard] },
  { path: "products", component: ProductIndexComponent, canActivate: [AuthGuard] },
  { path: "products/:id", component: ProductDetailsComponent, canActivate: [AuthGuard] },
  { path: "order/address", component: AddressIndexComponent, canActivate: [AuthGuard] },
  { path: "order", component: PlaceOrderComponent, canActivate: [AuthGuard] },
  { path: "orders", component: OrderIndexComponent, canActivate: [AuthGuard] },
  { path: "orders/:id", component: PlaceOrderComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes),],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
