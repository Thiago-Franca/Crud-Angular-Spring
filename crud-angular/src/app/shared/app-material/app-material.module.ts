import {NgModule} from '@angular/core';

import {MatCardModule} from "@angular/material/card";
import {MatTableModule} from "@angular/material/table";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatInputModule} from "@angular/material/input";


@NgModule({
exports: [MatCardModule, MatTableModule, MatToolbarModule, MatAutocompleteModule, MatInputModule],
})
export class AppMaterialModule { }
