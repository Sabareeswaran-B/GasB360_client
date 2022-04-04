import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeComponent } from './employee/employee.component';
import { AdminRoutingModule } from './admin-routing/admin-routing.module';
import {CardModule} from 'primeng/card';
import { GridModule } from '@progress/kendo-angular-grid';
import {DialogModule} from 'primeng/dialog';
import { CalendarModule } from '@progress/kendo-angular-dateinputs';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { ProductcategoryComponent } from './productcategory/productcategory.component';
import { FilledproductComponent } from './filledproduct/filledproduct.component';


@NgModule({
  declarations: [
    DashboardComponent,
    EmployeeComponent,
    ProductcategoryComponent,
    FilledproductComponent,


  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    CardModule,
    GridModule,
    FormsModule,
    ReactiveFormsModule,
    DialogModule,
    GridModule,
    ButtonModule,
// MenubarModule,
// ProgressSpinnerModule,
// TagModule,
InputTextModule,
CardModule,
// PasswordModule,
ReactiveFormsModule,
CalendarModule,
// BadgeModule,
// DockModule,
DialogModule,
DropdownModule,
// SlideMenuModule,
// TabMenuModule,
// MegaMenuModule,
// ChartModule,
// CarouselModule,
// MenuModule,
// TableModule
  ]
})
export class AdminModule { }
