import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './guard/admin.guard';
import { AuthGuard } from './guard/auth.guard';
import { DeliveryGuard } from './guard/delivery.guard';
import { EmployeeLoginComponent } from './shared/employee-login/employee-login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'customer',
    pathMatch: 'full'
  },
  {
    path: 'customer',
    loadChildren: () => import('./customer/customer.module').then(customer => customer.CustomerModule),
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(admin => admin.AdminModule),
    // pathMatch: "prefix"
    canActivate: [AuthGuard, AdminGuard]
  },
  { path: "login", component: EmployeeLoginComponent, pathMatch: "full" },
  {
    path: 'delivery',
    loadChildren: () => import('./delivery/delivery.module').then(delivery => delivery.DeliveryModule),
    canActivate: [AuthGuard, DeliveryGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
