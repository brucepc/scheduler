import {Component, OnInit} from '@angular/core';
import {AuthService} from "../auth/auth.service";
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatButtonToggle} from "@angular/material/button-toggle";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginFormGroup: FormGroup;
  togglePasswordIcon: 'visibility_off' | 'visibility' = 'visibility';
  passwordType: 'password' | 'text' = 'password';
  isLoading = false;

  get email(): AbstractControl {
    return this.loginFormGroup.get('username');
  }

  get password(): AbstractControl {
    return this.loginFormGroup.get('password');
  }

  constructor(
    private snackBar: MatSnackBar,
    private auth: AuthService,
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.buildForm();
  }

  togglePasswordVisibility(buttonToggle: MatButtonToggle) {
    this.passwordType = buttonToggle.checked ? 'text' : 'password';
    this.togglePasswordIcon = buttonToggle.checked ? 'visibility' : 'visibility_off';
  }

  submit() {
    if (this.loginFormGroup.valid) {
      this.isLoading = true;
      const {username, password} = this.loginFormGroup.getRawValue();
      this.auth.login(username, password)
        .toPromise()
        .then(_ => this.auth.redirectAfterLogin())
        .catch(error => {
          this.snackBar
            .open('Não foi possível ingressar com as credenciais informadas, verifique o dados e tente novamente!',
              null, {duration: 4000});
        })
        .finally(() => this.isLoading = false);
    }
  }

  private buildForm() {
    this.loginFormGroup = this.fb.group({
      username: this.fb.control('', [Validators.email, Validators.required]),
      password: this.fb.control('', [Validators.required])
    })
  }
}
