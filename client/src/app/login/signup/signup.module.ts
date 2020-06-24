import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SignupComponent} from "./signup.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatSnackBarModule} from "@angular/material/snack-bar";


@NgModule({
  declarations: [SignupComponent],
  exports: [SignupComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatButtonToggleModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatProgressBarModule,
    MatSnackBarModule
  ]
})
export class SignupModule {
}
