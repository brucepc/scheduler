import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LoginComponent} from './login.component';
import {SignupComponent} from "./signup/signup.component";
import {CredentialsComponent} from "./credentials/credentials.component";

const routes: Routes = [{
  path: '',
  component: CredentialsComponent,
  children: [
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: SignupComponent},
    {path: '', pathMatch: 'full', redirectTo: 'login'}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule {
}
