import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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
import { RouterModule } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ToastrModule } from 'ngx-toastr';
import { ListViewModule} from '@progress/kendo-angular-listview';
import { EmployeeLoginComponent } from './shared/employee-login/employee-login.component';
import { TextBoxModule } from '@progress/kendo-angular-inputs';
import {  ButtonModule } from '@progress/kendo-angular-buttons';
import {DialogModule} from 'primeng/dialog';

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
    EmployeeLoginComponent,
  ],
  imports: [
    ToastrModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    SharedModule,
    AdminModule,
    CustomerModule,
    DeliveryModule,
    FontAwesomeModule,
    ToastModule,
    ListViewModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    TextBoxModule,
    ButtonsModule,
    HttpClientModule,
    LabelModule,
    InputsModule,
    RippleModule,
    IconsModule,
    ButtonModule,
    DialogModule

  ],
  providers: [MessageService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
