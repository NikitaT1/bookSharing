import { NgModule } from '@angular/core';
import { FormComponent } from './components/form/form.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    FormComponent,
    PaginationComponent
  ],
  imports: [CommonModule],
  providers: [],
  exports: [
    FormComponent,
    PaginationComponent
  ],
})
export class SharedModule {}
