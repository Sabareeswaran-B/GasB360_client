import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeComponent } from './employee/employee.component';
import { AdminRoutingModule } from './admin-routing/admin-routing.module';
import {CardModule} from 'primeng/card';
import { GridModule } from '@progress/kendo-angular-grid';

@NgModule({
  declarations: [
    DashboardComponent,
    EmployeeComponent,


  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    CardModule,
    GridModule,
  ]
})
export class AdminModule { }
