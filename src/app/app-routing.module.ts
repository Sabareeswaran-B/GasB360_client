import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { EmployeeLoginComponent } from './shared/employee-login/employee-login.component';
import { DeliveryOrdersComponent } from './delivery/delivery-orders/delivery-orders.component';
import { DeliveryCompletedordersComponent } from './delivery/delivery-completedorders/delivery-completedorders.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'customer',
  //   pathMatch: 'prefix'
  // },
  {
    path: 'customer',
    loadChildren: () => import('./customer/customer.module').then(customer => customer.CustomerModule),
    // canActivate: [AuthGuard]
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(admin => admin.AdminModule),
    // pathMatch: "prefix"
    // canActivate: [AuthGuard]
  },
  {path:"login",component:EmployeeLoginComponent

    // path: 'customer',
    // loadChildren: () => import('./customer/customer.module').then(customer => customer.CustomerModule),
    // canActivate: [AuthGuard]
  },
  {path:"ordersbyemployee",component:DeliveryOrdersComponent},
  {path:"deliveredorders",component:DeliveryCompletedordersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
