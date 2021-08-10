import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksSliderComponent } from './books-slider.component';

@NgModule({
  declarations: [
    BooksSliderComponent
  ],
  imports: [CommonModule],
 
providers: [],
  exports: [
    BooksSliderComponent
  ],
})
export class BooksSliderModule {}
