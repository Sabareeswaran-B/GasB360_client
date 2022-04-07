import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { CustomerSignupComponent } from './customer-signup/customer-signup.component';
import { CustomerRoutingModule } from './customer-routing/customer-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext'
import { ToastModule } from 'primeng/toast';
import { DropdownModule } from 'primeng/dropdown';
import { ToastrModule } from 'ngx-toastr';
import { ProductIndexComponent } from './product-index/product-index.component';
import { RippleModule } from 'primeng/ripple';
import { ListViewModule } from "@progress/kendo-angular-listview";
import { LayoutModule } from '@progress/kendo-angular-layout';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { AddressIndexComponent } from './address-index/address-index.component';
import { ProgressBarModule } from 'primeng/progressbar';
import { StoreModule } from '@ngrx/store';
import { ProductReducer } from '../ngrx/product.reducer';
import { HeaderComponent } from './header/header.component';
import { ChipModule } from 'primeng/chip';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileReducer } from '../ngrx/profile.reducer';
import { HeaderOldComponent } from './header-old/header-old.component';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { OrderIndexComponent } from './order-index/order-index.component';
import { CookieService } from 'ngx-cookie-service';
import { OrderDetailsComponent } from './order-details/order-details.component';
import {PaginatorModule} from 'primeng/paginator';


@NgModule({
  declarations: [
    CustomerLoginComponent,
    CustomerSignupComponent,
    ProductIndexComponent,
    ProductDetailsComponent,
    AddressIndexComponent,
    HeaderComponent,
    ProfileComponent,
    DashboardComponent,
    HeaderOldComponent,
    PlaceOrderComponent,
    OrderIndexComponent,
    OrderDetailsComponent
  ],
  imports: [
    ToastrModule.forRoot(),
    StoreModule.forFeature('product', ProductReducer),
    StoreModule.forFeature('profile', ProfileReducer),
    ChipModule,
    PaginatorModule,
    ProgressBarModule,
    LayoutModule,
    BreadcrumbModule,
    ListViewModule,
    DialogModule,
    ConfirmDialogModule,
    ToastModule,
    CommonModule,
    CustomerRoutingModule,
    FontAwesomeModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ButtonModule,
    InputTextModule,
    DropdownModule,
    RippleModule,
  ],
  exports: [
    CustomerLoginComponent,
    CustomerSignupComponent,
    ProductIndexComponent,
    ProductDetailsComponent,
    AddressIndexComponent,
    HeaderComponent
  ],
  providers: [MessageService, ConfirmationService, CookieService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CustomerModule { }
