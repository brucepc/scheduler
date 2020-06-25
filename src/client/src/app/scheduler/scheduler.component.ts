import {Component, HostBinding, OnInit} from '@angular/core';
import {AuthService} from "../auth/auth.service";
import {BreakpointObserver} from "@angular/cdk/layout";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.scss']
})
export class SchedulerComponent implements OnInit {
  userName: string;
  menuOpened = true;
  @HostBinding('class.small-screen')
  isSmallScreen = false;

  get menuMode(): string {
    return this.isSmallScreen ? 'over' : 'side';
  }

  private sbs = new Subscription();


  constructor(
    private auth: AuthService,
    private breakPoint: BreakpointObserver
  ) {
    const {user_name} = this.auth.getClaims();
    this.userName = user_name;
    this.sbs.add(this.breakPoint.observe(['(max-width: 599px'])
      .subscribe(result => {
        if (result.matches) {
          this.isSmallScreen = true;
          this.menuOpened = false;
        } else {
          this.isSmallScreen = false;
          this.menuOpened = true;
        }
      }))
  }

  ngOnInit(): void {
  }

  isDoctor() {
    const {authorities}: { authorities: string[] } = this.auth.getClaims();
    return authorities.includes('ROLE_DOCTOR');
  }

  logOut() {
    this.auth.logout();
  }
}
