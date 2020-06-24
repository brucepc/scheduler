import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable()
export class AuthClientInterceptor implements HttpInterceptor {
  private authConfig = environment.auth;

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const request = req.clone({
      headers: req.headers.set('Authorization', this.getBasicAuthToken())
    });
    return next.handle(request);
  }

  private getBasicAuthToken(): string {
    const basicToken = btoa(`${this.authConfig.clientId}:${this.authConfig.clientSecret}`);
    return `Basic ${basicToken}`;
  }
}
