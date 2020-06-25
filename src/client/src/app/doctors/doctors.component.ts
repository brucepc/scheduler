import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {environment} from "../../environments/environment";
import {SelectionModel} from "@angular/cdk/collections";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {catchError, map, startWith, switchMap} from "rxjs/operators";
import {MatDialog} from "@angular/material/dialog";
import {AuthService} from "../auth/auth.service";
import {DoctorFormComponent} from "./doctor-form/doctor-form.component";

export class DoctorsDataBase {
  constructor(private _httpClient: HttpClient) {
  }

  getDoctors(name: string, page: number): Observable<any> {
    const href = `${environment.hostAddress}/doctors`;
    const params = new HttpParams()
      .append('page', '' + page)
      .append('name', name);
    return this._httpClient.get(href, {params})
  }
}


@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss']
})
export class DoctorsComponent implements OnInit {
  private allSelected = false;
  displayedColumns = [
    'select',
    'name',
    'crm'
  ];
  selection = new SelectionModel();
  dataSource: DoctorsDataBase | null;
  isLoading = false;
  resultsLength: number;
  data: any[] = [];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private http: HttpClient,
    private dialog: MatDialog,
    private auth: AuthService
  ) {
  }


  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource = new DoctorsDataBase(this.http);
    this.paginator.page.pipe(
      startWith({}),
      switchMap(() => {
        this.isLoading = true;
        return this.dataSource.getDoctors('', this.paginator.pageIndex);
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

  addDoctor() {
    const dialogRef = this.dialog.open(DoctorFormComponent, {
      width: '350px'
    });
    const sbs = dialogRef.afterClosed()
      .subscribe(() => {
        this.paginator.page.emit(this.paginator as PageEvent);
        sbs.unsubscribe();
      })
  }

  isAllSelected() {
    return this.allSelected;
  }

  masterToggle() {
    this.allSelected = !this.allSelected;
  }
}
