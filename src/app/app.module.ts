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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
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
import { HomePageComponent } from './home-page/home-page.component';
import { NgFooterModule } from 'ng-footer';





@NgModule({
  declarations: [
    AppComponent,
    EmployeeLoginComponent,
    HomePageComponent
  ],
  imports: [
    ToastrModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    NgFooterModule,
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
    NgbModule,
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

  ],
  providers: [MessageService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
