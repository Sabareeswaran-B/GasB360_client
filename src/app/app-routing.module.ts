import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
