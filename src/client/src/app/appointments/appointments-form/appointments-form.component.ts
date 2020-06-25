import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {of, Subscription} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {catchError, delay, distinctUntilChanged, map, switchMap} from "rxjs/operators";
import {MatDialogRef} from "@angular/material/dialog";
import {AuthService} from "../../auth/auth.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {LocalTimePipe} from "angular2-moment";

const snackBarConfig = {duration: 10000};

@Component({
  selector: 'app-appointments-form',
  templateUrl: './appointments-form.component.html',
  styleUrls: ['./appointments-form.component.scss']
})
export class AppointmentsFormComponent implements OnInit {
  private sbs = new Subscription();
  appointmentFormGroup: FormGroup;
  selectedCustomer: any;
  filteredCustomers = [];
  selectedDoctor: any;
  filteredDoctors = [];
  isLoadingDoctors = false;
  isLoadingCustomers = false;
  isLoading = false;
  private localTimePipe: LocalTimePipe;

  constructor(
    public dialogRef: MatDialogRef<AppointmentsFormComponent>,
    private fb: FormBuilder,
    private http: HttpClient,
    private auth: AuthService,
    private snackbar: MatSnackBar,
  ) {
    this.buildForm();
    this.localTimePipe = new LocalTimePipe();
  }

  ngOnInit(): void {
  }

  isDoctor() {
    const {authorities}: { authorities: string[] } = this.auth.getClaims();
    return authorities.includes('ROLE_DOCTOR');
  }

  setDoctor(event) {
    const doctor = event.option.value;
    this.appointmentFormGroup.patchValue({doctorName: doctor.name})
    this.selectedDoctor = doctor;
  }

  setCustomer(event) {
    const customer = event.option.value;
    this.appointmentFormGroup.patchValue({customerName: customer.name})
    this.selectedCustomer = customer;
  }

  buildForm() {
    this.appointmentFormGroup = this.fb.group({
      doctorName: this.fb.control('', Validators.required),
      appointmentDate: this.fb.control('', Validators.required),
      appointmentHour: this.fb.control('', [Validators.required, Validators.min(6), Validators.max(18)])
    });
    this.sbs.add(
      this.appointmentFormGroup.get('doctorName').valueChanges
        .pipe(
          distinctUntilChanged(),
          delay(300),
          switchMap(v => this.searchDoctors(v))
        )
        .subscribe(v => this.filteredDoctors = v));

    if (this.isDoctor()) {
      const customerControl = this.fb.control('', Validators.required);
      this.appointmentFormGroup.addControl('customerName', customerControl);
      this.sbs.add(
        customerControl.valueChanges
          .pipe(
            distinctUntilChanged(),
            delay(300),
            switchMap(v => this.searchCustomers(v))
          )
          .subscribe(v => this.filteredCustomers = v));
    }
  }

  cancel() {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
  }

  async save() {
    if (this.appointmentFormGroup.invalid) {
      this.snackbar.open('Não possível criar o agendamento!', null, snackBarConfig)
    } else {
      let {appointmentDate, appointmentHour} = this.appointmentFormGroup.getRawValue();
      appointmentDate = this.localTimePipe.transform(appointmentDate).format('YYYY-MM-DD');
      appointmentDate += ` ${appointmentHour}`;

      const appointment = {appointmentDate, doctor: this.selectedDoctor};
      const endpoint = `${environment.hostAddress}/appointments`;
      this.isLoading = true;

      if (this.isDoctor()) {
        appointment['customer'] = this.selectedCustomer;
      } else {
        try {
          appointment['customer'] = await this.auth.getUserData().toPromise();
        } catch (e) {
          this.snackbar.open('Algo deu errado ao criar o agedamento =/', null, snackBarConfig)
          this.isLoading = false;
          return;
        }
      }

      this.http.post(endpoint, appointment)
        .toPromise()
        .catch(_ => this.snackbar.open('Algo deu errado ao criar o agedamento =/', null, snackBarConfig))
        .then(() => this.cancel())
        .finally(() => this.isLoading = false);
    }
  }

  private searchCustomers(name: string) {
    const endpoint = `${environment.hostAddress}/customers`;
    const params = new HttpParams().append('name', name);
    this.isLoadingCustomers = true;
    return this.http.get<{ content: any }>(endpoint, {params})
      .pipe(
        map(({content}) => {
          this.isLoadingCustomers = false;
          return content;
        }),
        catchError(_ => of([]))
      );
  }

  private searchDoctors(name: string) {
    const endpoint = `${environment.hostAddress}/doctors`;
    const params = new HttpParams().append('name', name);
    this.isLoadingDoctors = true;
    return this.http.get<{ content: any }>(endpoint, {params})
      .pipe(
        map(({content}) => {
          this.isLoadingDoctors = false;
          return content;
        }),
        catchError(_ => of([])));
  }
}
