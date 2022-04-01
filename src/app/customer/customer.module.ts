import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { CustomerSignupComponent } from './customer-signup/customer-signup.component';
import { CustomerRoutingModule } from './customer-routing/customer-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { MessageService } from 'primeng/api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext'
import { ToastModule } from 'primeng/toast';
import { DropdownModule } from 'primeng/dropdown';


@NgModule({
  declarations: [
    CustomerLoginComponent,
    CustomerSignupComponent
  ],
  imports: [
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
  ],
  providers: [MessageService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CustomerModule { }
