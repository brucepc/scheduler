import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from "./auth/auth.guard";


const routes: Routes = [
  {
    path: 'scheduler',
    canActivate: [AuthGuard],
    loadChildren: () => import('./scheduler/scheduler.module').then(m => m.SchedulerModule)
  },
  {
    path: '',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
