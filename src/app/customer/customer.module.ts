import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { CustomerSignupComponent } from './customer-signup/customer-signup.component';



@NgModule({
  declarations: [
    CustomerLoginComponent,
    CustomerSignupComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CustomerModule { }
