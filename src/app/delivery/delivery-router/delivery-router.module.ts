import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DeliveryCompletedordersComponent } from '../delivery-completedorders/delivery-completedorders.component';
import { DeliveryOrdersComponent } from '../delivery-orders/delivery-orders.component';
import { DeliveryDashboardComponent } from '../delivery-dashboard/delivery-dashboard.component';

const routes: Routes = [
  {path:"delivery/ordersbyemployee",component:DeliveryOrdersComponent},
  {path:"delivery/deliveredorders",component:DeliveryCompletedordersComponent},
  {path:"delivery/dashboard",component:DeliveryDashboardComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes),CommonModule],
  exports: [RouterModule]
})
export class DeliveryRouterModule { }
