import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypeaheadComponent } from './typeahead.component';
import {MatFormFieldModule} from '@angular/material/form-field'
import { ReactiveFormsModule } from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';



@NgModule({
  declarations: [
    TypeaheadComponent
  ],
  imports: [
    CommonModule, MatFormFieldModule, ReactiveFormsModule, MatAutocompleteModule
  ],
  exports:[TypeaheadComponent]
})
export class TypeaheadModule { }
