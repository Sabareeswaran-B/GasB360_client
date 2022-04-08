import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliveryOrdersComponent } from './delivery-orders/delivery-orders.component';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { DeliveryCompletedordersComponent } from './delivery-completedorders/delivery-completedorders.component';
import { DeliveryRouterModule } from './delivery-router/delivery-router.module';
import {ProgressBarModule} from 'primeng/progressbar';
import { DeliveryDashboardComponent } from './delivery-dashboard/delivery-dashboard.component';


@NgModule({
  declarations: [
    DeliveryOrdersComponent,
    DeliveryCompletedordersComponent,
    DeliveryDashboardComponent,
  ],
  imports: [
    CommonModule,
    DialogModule,
    ButtonModule,
    FormsModule,
    DeliveryRouterModule,
    ProgressBarModule

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DeliveryModule { }
