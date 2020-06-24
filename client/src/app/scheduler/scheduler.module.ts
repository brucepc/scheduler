import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SchedulerRoutingModule} from './scheduler-routing.module';
import {SchedulerComponent} from './scheduler.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {AppointmentsModule} from "../appointments/appointments.module";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {AuthTokenInterceptor} from "../auth/auth-token-interceptor";
import {AuthModule} from "../auth/auth.module";


@NgModule({
  declarations: [SchedulerComponent],
  imports: [
    CommonModule,
    AppointmentsModule,
    SchedulerRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    AuthModule
  ],
  providers: []
})
export class SchedulerModule {
}
