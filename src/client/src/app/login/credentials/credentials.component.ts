import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'app-credentials',
  templateUrl: './credentials.component.html',
  styleUrls: ['./credentials.component.scss']
})
export class CredentialsComponent implements OnInit {

  constructor(
    private auth: AuthService
  ) {
    if (this.auth.isAuthenticated()) {
      this.auth.redirectAfterLogin();
    }
  }

  ngOnInit(): void {
  }

}
