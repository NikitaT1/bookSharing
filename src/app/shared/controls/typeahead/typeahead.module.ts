import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypeaheadComponent } from './typeahead.component';
import {MatFormFieldModule } from '@angular/material/form-field'
import { ReactiveFormsModule } from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    TypeaheadComponent
  ],
  imports: [
    CommonModule, MatFormFieldModule, ReactiveFormsModule, MatAutocompleteModule, MatInputModule
  ],
  exports:[TypeaheadComponent]
})
export class TypeaheadModule { }
