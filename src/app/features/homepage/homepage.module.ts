import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksListComponent } from './books-list/books-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BooksListService } from './books-list/books-list.service';

@NgModule({
  declarations: [BooksListComponent],
  imports: [CommonModule, SharedModule],
  exports: [BooksListComponent],
  providers: [BooksListService],
})
export class HomepageModule {}
