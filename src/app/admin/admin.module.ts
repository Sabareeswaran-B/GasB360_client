import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeComponent } from './employee/employee.component';
import { AdminRoutingModule } from './admin-routing/admin-routing.module';


@NgModule({
  declarations: [
    DashboardComponent,
    EmployeeComponent,


  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
