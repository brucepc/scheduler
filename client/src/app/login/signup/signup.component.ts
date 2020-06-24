import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatButtonToggle} from "@angular/material/button-toggle";
import {MatSnackBar} from "@angular/material/snack-bar";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../auth/auth.service";
import {switchMap} from "rxjs/operators";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  customerFormGroup: FormGroup;
  togglePasswordIcon: 'visibility_off' | 'visibility' = 'visibility';
  passwordType: 'password' | 'text' = 'password';
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private http: HttpClient,
    private auth: AuthService
  ) {
  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.customerFormGroup = this.fb.group({
      name: this.fb.control('', [Validators.required]),
      email: this.fb.control('', [Validators.required, Validators.email]),
      healthInsurance: this.fb.control('', [Validators.required]),
      password: this.fb.control('', [Validators.required, Validators.pattern(/.{5,}/)])
    })
  }

  createUserAccount() {
    if (this.customerFormGroup.invalid) {
      this.snackBar.open('Verifique se o formulario esta preenchido corretamente e tente novamente!', null, {
        duration: 10000
      })
    }

    if (this.customerFormGroup.valid) {
      this.isLoading = true;
      const customer = this.customerFormGroup.getRawValue();
      this.http.post('http://localhost:8080/signup', customer)
        .pipe(
          switchMap(_ => {
            return this.auth.login(customer.email, customer.password);
          })
        )
        .toPromise()
        .then(_ => this.auth.redirectAfterLogin())
        .finally(() => this.isLoading = false);
    }
  }

  togglePasswordVisibility(buttonToggle: MatButtonToggle) {
    this.passwordType = buttonToggle.checked ? 'text' : 'password';
    this.togglePasswordIcon = buttonToggle.checked ? 'visibility_off' : 'visibility';
    console.log('PASSWORD VISIBILITY ', buttonToggle.checked);
  }
}
