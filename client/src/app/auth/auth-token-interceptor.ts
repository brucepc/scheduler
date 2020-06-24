import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {AuthService} from "./auth.service";

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {

  constructor(
    private auth: AuthService
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!this.auth.isAuthenticated()) {
      return next.handle(req);
    }

    const request = req.clone({
      headers: req.headers.set('Authorization', this.getAccessTokenAuthorization())
    });
    console.log('HEADERS', request.headers);
    return next.handle(request);
  }

  private getAccessTokenAuthorization(): string {
    const accessToken = this.auth.getAccessToken();
    return `Bearer ${accessToken}`;
  }

}
