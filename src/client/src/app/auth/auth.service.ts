import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {map, switchMap, tap} from "rxjs/operators";
import {JwtHelperService} from "@auth0/angular-jwt";
import {Observable, of} from "rxjs";
import {User} from "../../model";

export interface Token {
  access_token: string,
  token_type: string,
  refresh_token: string,
  expires_in: number,
  scope: string,
  jti: string
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authConfig = environment.auth;
  redirectUrl = '/scheduler';
  loginUrl = '/login';

  constructor(
    private httpClient: HttpClient,
    private helperService: JwtHelperService,
  ) {
  }

  login(username: string, password: string) {
    const {login} = this.authConfig.endpoint;
    const payload = new FormData();
    payload.append('username', username);
    payload.append('password', password);
    payload.append('grant_type', this.authConfig.grantType);
    return this.httpClient.post<Token>(login, payload)
      .pipe(map(token => {
        this.saveToken(token);
        const decoded = this.helperService.decodeToken();
        setTimeout(_ => {
          this.getValidToken();
        }, token.expires_in)
      }));
  }

  private saveToken({access_token, refresh_token}) {
    sessionStorage.setItem('access_token', access_token);
    sessionStorage.setItem('refresh_token', refresh_token);
  }

  getUserData(): Observable<User> {
    const userDetails = sessionStorage.getItem('user_details');
    if (!!userDetails) {
      return of(JSON.parse(userDetails));
    }

    return this.getValidToken().pipe(
      switchMap(_ => {
        const uri = environment.auth.endpoint.userDetails;
        return this.httpClient.get<User>(uri)
          .pipe(
            tap(user => sessionStorage.setItem('user_details', JSON.stringify(user)))
          );
      })
    );
  }

  getAccessToken() {
    return sessionStorage.getItem('access_token');
  }

  logout() {
    sessionStorage.clear();
    location.href = '/';
  }

  isAuthenticated() {
    return !!this.helperService.tokenGetter() && !this.helperService.isTokenExpired();

  }

  getClaims() {
    return this.helperService.decodeToken();
  }

  redirectAfterLogin() {
    location.href = this.redirectUrl;
  }


  getValidToken() {
    const {login} = this.authConfig.endpoint;
    if (this.helperService.isTokenExpired()) {
      const code = sessionStorage.getItem('refresh_token');
      if (code === null) {
        location.href = this.loginUrl;
      }
      return this.httpClient.post<Token>(login, {'grant_type': 'authorization_code', code})
        .pipe(
          tap(token => this.saveToken(token)),
          map(({access_token}) => access_token)
        );
    }
    return of(this.getAccessToken());
  }

  // hasRole(role:string): boolean{
  //
  // }
}
