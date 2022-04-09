import { ExcelModule } from '@progress/kendo-angular-grid';
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
import {AccordionModule} from 'primeng/accordion';    
import { RouterModule } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ToastrModule } from 'ngx-toastr';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { StoreModule } from '@ngrx/store';
import { ProductReducer } from './ngrx/product.reducer';
import { ProfileReducer } from './ngrx/profile.reducer';
<<<<<<< HEAD
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
=======
import { EmployeeLoginComponent } from './shared/employee-login/employee-login.component';
import { ListViewModule} from '@progress/kendo-angular-listview';
import { TextBoxModule } from '@progress/kendo-angular-inputs';
import {  ButtonModule } from '@progress/kendo-angular-buttons';
import {DialogModule} from 'primeng/dialog';

// Kendo
import { LabelModule } from "@progress/kendo-angular-label";
import { InputsModule } from '@progress/kendo-angular-inputs';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { RippleModule } from "@progress/kendo-angular-ripple";
import { IconsModule } from "@progress/kendo-angular-icons";

>>>>>>> 8b853ec716387c9c8240e4249ea2d90191ca1a6f




@NgModule({
  declarations: [
    AppComponent,
    EmployeeLoginComponent
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
    StoreModule.forRoot({ product: ProductReducer, profile: ProfileReducer}),
<<<<<<< HEAD
    NgbModule,
=======
    FormsModule,
    ReactiveFormsModule,
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

>>>>>>> 8b853ec716387c9c8240e4249ea2d90191ca1a6f
  ],
  providers: [MessageService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
