import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {AppMaterialModule} from "../shared/app-material/app-material.module";
import {CoursesRoutingModule} from './courses-routing.module';

import {CoursesComponent} from './courses/courses.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    CoursesComponent
  ],
    imports: [
        CommonModule,
        CoursesRoutingModule,
        AppMaterialModule,
        ReactiveFormsModule
    ]
})
export class CoursesModule { }
