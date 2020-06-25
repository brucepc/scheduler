import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SchedulerComponent} from './scheduler.component';
import {AppointmentsComponent} from "../appointments/appointments.component";

const routes: Routes = [
  {
    path: '',
    component: SchedulerComponent,
    children: [
      {path: 'appointments', component: AppointmentsComponent},
      {path: 'doctors', loadChildren: () => import('../doctors/doctors.module').then(m => m.DoctorsModule)},
      {path: '', pathMatch: 'full', redirectTo: 'appointments'}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchedulerRoutingModule {
}
