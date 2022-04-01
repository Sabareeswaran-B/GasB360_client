import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerModule } from './customer/customer.module';
import { DeliveryModule } from './delivery/delivery.module';
import { SharedModule } from './shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EmployeeLoginComponent } from './shared/employee-login/employee-login.component';
// Kendo
import { LabelModule } from "@progress/kendo-angular-label";
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { RippleModule } from "@progress/kendo-angular-ripple";
import { IconsModule } from "@progress/kendo-angular-icons";





@NgModule({
  declarations: [
    AppComponent,
    EmployeeLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AdminModule,
    CustomerModule,
    DeliveryModule,
    FontAwesomeModule,
    InputsModule,
    BrowserAnimationsModule,
    LabelModule,
    LayoutModule,
    ButtonsModule,
    RippleModule,
    IconsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
