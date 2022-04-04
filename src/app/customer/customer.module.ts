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


@NgModule({
  declarations: [
    CustomerLoginComponent,
    CustomerSignupComponent,
    ProductIndexComponent,
    ProductDetailsComponent
  ],
  imports: [
    ToastrModule.forRoot(),
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
  providers: [MessageService, ConfirmationService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CustomerModule { }
