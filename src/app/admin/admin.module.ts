import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeComponent } from './employee/employee.component';
import { StockComponent } from './stock/stock.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    DashboardComponent,
    EmployeeComponent,
    StockComponent,
    LoginComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
