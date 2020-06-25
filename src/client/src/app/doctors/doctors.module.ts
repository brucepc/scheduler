import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DoctorsRoutingModule} from './doctors-routing.module';
import {DoctorsComponent} from './doctors.component';
import {DoctorFormComponent} from './doctor-form/doctor-form.component';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatIconModule} from "@angular/material/icon";
import {ReactiveFormsModule} from "@angular/forms";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {AuthModule} from "../auth/auth.module";
import {MatDialogModule} from "@angular/material/dialog";
import {MatCardModule} from "@angular/material/card";
import {MatTableModule} from "@angular/material/table";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";


@NgModule({
    declarations: [DoctorsComponent, DoctorFormComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        DoctorsRoutingModule,
        MatProgressBarModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatIconModule,
        MatSnackBarModule,
        MatDialogModule,
        AuthModule,
        MatCardModule,
        MatTableModule,
        MatCheckboxModule,
        MatPaginatorModule
    ]
})
export class DoctorsModule {
}
