import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {SelectionModel} from "@angular/cdk/collections";
import {Observable, of} from "rxjs";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {catchError, map, startWith, switchMap} from "rxjs/operators";
import {MatDialog} from "@angular/material/dialog";
import {AppointmentsFormComponent} from "./appointments-form/appointments-form.component";
import {AuthService} from "../auth/auth.service";
import {environment} from "../../environments/environment";

export class AppointmentsDataBase {
  constructor(private _httpClient: HttpClient) {
  }

  getAppointments(name: string, page: number): Observable<any> {
    const href = `${environment.hostAddress}/appointments`;
    console.log('GET APPOINTMENTS', href);
    const params = new HttpParams()
      .append('page', '' + page)
      .append('name', name);
    return this._httpClient.get(href, {params})
  }
}

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})
export class AppointmentsComponent implements OnInit, AfterViewInit {
  private allSelected = false;
  displayedColumns = ['select', 'speciality', 'name', 'date'];
  selection = new SelectionModel();
  dataSource: AppointmentsDataBase | null;
  isLoading = false;
  resultsLength: number;
  data: any[] = [];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private http: HttpClient,
    private dialog: MatDialog,
    private auth: AuthService
  ) {
    if (this.isDoctor()) {
      this.displayedColumns.push('customer');
    }
  }

  ngOnInit(): void {
  }

  isDoctor() {
    const claims = this.auth.getClaims();
    if (this.auth.isAuthenticated() && 'authorities' in claims) {
      return claims.authorities.indexOf('ROLE_DOCTOR') > -1;
    }
    return false;
  }

  ngAfterViewInit() {
    this.dataSource = new AppointmentsDataBase(this.http);
    this.paginator.page.pipe(
      startWith({}),
      switchMap(() => {
        this.isLoading = true;
        return this.dataSource.getAppointments('', this.paginator.pageIndex);
      }),
      map<any, any>(data => {
        this.isLoading = false;
        this.resultsLength = data.totalElements;
        return data.content;
      }),
      catchError(() => {
        this.isLoading = false;
        return of([]);
      })
    ).subscribe(data => this.data = data);
  }

  addAppointment() {
    const dialogRef = this.dialog.open(AppointmentsFormComponent, {
      width: '350px'
    });
    const sbs = dialogRef.afterClosed()
      .subscribe(() => this.paginator.page.emit(this.paginator as PageEvent))
  }

  isAllSelected() {
    return this.allSelected;
  }

  masterToggle() {
    this.allSelected = !this.allSelected;
  }

  // private loadAppointments() {
  //   this.http.get('//localhost:8080/appointments')
  //     .toPromise()
  //     .then(response => {
  //       this.dataSource.
  //     })
  // }
}
