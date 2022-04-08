import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { EmployeeLoginComponent } from './shared/employee-login/employee-login.component';

const routes: Routes = [
  {path:"employeelogin",component:EmployeeLoginComponent},
  {
    path: 'delivery',
    loadChildren: () => import('./delivery/delivery.module').then(delivery => delivery.DeliveryModule),
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
