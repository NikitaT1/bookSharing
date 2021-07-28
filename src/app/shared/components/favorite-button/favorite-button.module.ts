import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoriteButtonComponent } from './favorite-button.component';

@NgModule({
  declarations: [
    FavoriteButtonComponent
  ],
  imports: [CommonModule],
  providers: [],
  exports: [
    FavoriteButtonComponent
  ],
})
export class AddButtonModule {}
