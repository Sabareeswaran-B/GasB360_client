import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DeliveryCompletedordersComponent } from '../delivery-completedorders/delivery-completedorders.component';
import { DeliveryOrdersComponent } from '../delivery-orders/delivery-orders.component';
import { DeliveryDashboardComponent } from '../delivery-dashboard/delivery-dashboard.component';
import { AuthGuard } from 'src/app/guard/auth.guard';
import { DeliveryGuard } from 'src/app/guard/delivery.guard';

const routes: Routes = [
  { path: "delivery/ordersbyemployee", component: DeliveryOrdersComponent, canActivate: [AuthGuard, DeliveryGuard] },
  { path: "delivery/deliveredorders", component: DeliveryCompletedordersComponent, canActivate: [AuthGuard, DeliveryGuard] },
  { path: "delivery/dashboard", component: DeliveryDashboardComponent, canActivate: [AuthGuard, DeliveryGuard] }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule]
})
export class DeliveryRouterModule { }
