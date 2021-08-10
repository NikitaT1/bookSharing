import { NgModule } from '@angular/core';
import { AddButtonComponent } from './add-button.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AddButtonComponent
  ],
  imports: [CommonModule],
  providers: [],
  exports: [
    AddButtonComponent
  ],
})
export class AddButtonModule {}
