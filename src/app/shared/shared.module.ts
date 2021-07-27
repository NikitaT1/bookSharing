import { NgModule } from '@angular/core';
import { AddButtonComponent } from './components/add-button/add-button.component';
import { FavoriteButtonComponent } from './components/favorite-button/favorite-button.component';
import { FormComponent } from './components/form/form.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { SearchComponent } from './components/search/search.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AddButtonComponent,
    FavoriteButtonComponent,
    FormComponent,
    PaginationComponent,
    SearchComponent,
  ],
  imports: [CommonModule],
  providers: [],
  exports: [
    AddButtonComponent,
    FavoriteButtonComponent,
    FormComponent,
    PaginationComponent,
    SearchComponent,
  ],
})
export class SharedModule {}
