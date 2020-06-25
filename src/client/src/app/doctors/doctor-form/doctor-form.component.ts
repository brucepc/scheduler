import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatButtonToggle} from "@angular/material/button-toggle";
import {environment} from "../../../environments/environment";
import {MatSnackBar} from "@angular/material/snack-bar";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../auth/auth.service";
import {MatDialogRef} from "@angular/material/dialog";

const snackBarConfig = {duration: 5000};

@Component({
  selector: 'app-doctor-form',
  templateUrl: './doctor-form.component.html',
  styleUrls: ['./doctor-form.component.scss']
})
export class DoctorFormComponent implements OnInit {
  doctorFormGroup: FormGroup;
  togglePasswordIcon: 'visibility_off' | 'visibility' = 'visibility';
  passwordType: 'password' | 'text' = 'password';
  isLoading = false;

  constructor(
    public dialogRef: MatDialogRef<DoctorFormComponent>,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private http: HttpClient,
    private auth: AuthService
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  save() {
    if (this.doctorFormGroup.invalid) {
      this.snackBar.open('Verifique se o formulario esta preenchido corretamente e tente novamente!',
        null,
        snackBarConfig);
    }

    if (this.doctorFormGroup.valid) {
      this.isLoading = true;
      const doctor = this.doctorFormGroup.getRawValue();
      this.http.post(`${environment.hostAddress}/doctors`, doctor)
        .toPromise()
        .then(() => {
          this.snackBar.open('Sucesso!', null, snackBarConfig);
          this.dialogRef.close();
        })
        .catch(({error: {message}, status}) => {
          if (status !== 409) {
            message = 'Algo deu errado ao criar o registro';
          }
          this.snackBar.open(message, null, snackBarConfig);
        })
        .finally(() => this.isLoading = false);
    }

  }

  togglePasswordVisibility(buttonToggle: MatButtonToggle) {
    this.passwordType = buttonToggle.checked ? 'text' : 'password';
    this.togglePasswordIcon = buttonToggle.checked ? 'visibility_off' : 'visibility';
    console.log('PASSWORD VISIBILITY ', buttonToggle.checked);
  }

  private buildForm() {
    this.doctorFormGroup = this.fb.group({
      name: this.fb.control('', [Validators.required]),
      email: this.fb.control('', [Validators.required, Validators.email]),
      crm: this.fb.control('', [Validators.required]),
      password: this.fb.control('', [Validators.required, Validators.pattern(/.{5,}/)])
    });
  }
}
