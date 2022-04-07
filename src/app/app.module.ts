import { ExcelModule } from '@progress/kendo-angular-grid';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ListViewModule } from '@progress/kendo-angular-listview';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { StoreModule } from '@ngrx/store';
import { ProductReducer } from './ngrx/product.reducer';
import { ProfileReducer } from './ngrx/profile.reducer';




@NgModule({
  declarations: [
    AppComponent
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
  ],
  providers: [MessageService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
