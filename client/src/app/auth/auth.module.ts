import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthService} from "./auth.service";
import {AuthGuard} from "./auth.guard";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {AuthClientInterceptor} from "./auth-client-interceptor";
import {AuthTokenInterceptor} from "./auth-token-interceptor";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [
    AuthGuard,
    AuthService,
    AuthTokenInterceptor,
    {provide: HTTP_INTERCEPTORS, useClass: AuthClientInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: AuthTokenInterceptor, multi: true}]
})
export class AuthModule {
}
