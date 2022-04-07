import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliveryOrdersComponent } from './delivery-orders/delivery-orders.component';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { DeliveryCompletedordersComponent } from './delivery-completedorders/delivery-completedorders.component';



@NgModule({
  declarations: [
    DeliveryOrdersComponent,
    DeliveryCompletedordersComponent,
  ],
  imports: [
    CommonModule,
    DialogModule,
    ButtonModule,
    FormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DeliveryModule { }
