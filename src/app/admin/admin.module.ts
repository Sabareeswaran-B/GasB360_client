import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeComponent } from './employee/employee.component';
import { AdminRoutingModule } from './admin-routing/admin-routing.module';
import { CardModule } from 'primeng/card';
import { ExcelModule, GridModule } from '@progress/kendo-angular-grid';
import { DialogModule } from 'primeng/dialog';
import { CalendarModule } from '@progress/kendo-angular-dateinputs';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ProductcategoryComponent } from './productcategory/productcategory.component';
import { FilledproductComponent } from './filledproduct/filledproduct.component';
import { ExcelExportModule } from '@progress/kendo-angular-excel-export';
import { TooltipModule } from 'primeng/tooltip';
import { UnfilledproductComponent } from './unfilledproduct/unfilledproduct.component';
import { ProgressBarModule } from 'primeng/progressbar';
import { KnobModule } from 'primeng/knob';
import { ChartModule } from 'primeng/chart';
import { NgApexchartsModule } from "ng-apexcharts";
import { ConnectionrequestComponent } from './connectionrequest/connectionrequest.component';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MenubarModule } from 'primeng/menubar';
import { NavbarComponent } from './navbar/navbar.component';
import { NgSidenavModule } from 'ng-sidenav';

@NgModule({
  declarations: [
    DashboardComponent,
    EmployeeComponent,
    ProductcategoryComponent,
    FilledproductComponent,
    UnfilledproductComponent,
    ConnectionrequestComponent,
    NavbarComponent,


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
    MenubarModule,
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
    // ExcelExportModule,
    ExcelModule,
    TooltipModule,
    ProgressBarModule,
    KnobModule,
    ChartModule,
    NgApexchartsModule,
    SplitButtonModule,
    NgSidenavModule
    // SlideMenuModule,
    // TabMenuModule,
    // MegaMenuModule,
    // ChartModule,
    // CarouselModule,
    // MenuModule,
    // TableModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AdminModule { }
