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
import { NgSidenavModule } from 'ng-sidenav';
import { SplitButtonModule } from 'primeng/splitbutton';
import { NavbarComponent } from './navbar/navbar.component';
import {KnobModule} from 'primeng/knob';
import {ChartModule} from 'primeng/chart';
import {CardModule} from 'primeng/card';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import { ChipModule } from 'primeng/chip';


@NgModule({
  declarations: [
    DeliveryOrdersComponent,
    DeliveryCompletedordersComponent,
    DeliveryDashboardComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    DialogModule,
    ButtonModule,
    FormsModule,
    DeliveryRouterModule,
    ProgressBarModule,
    SplitButtonModule,
    NgSidenavModule,
    KnobModule,
    ChartModule,
    CardModule,
    AvatarModule,
    AvatarGroupModule,
    ScrollPanelModule,
    ChipModule

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DeliveryModule { }
