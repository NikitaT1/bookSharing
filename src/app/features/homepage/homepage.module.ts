import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksListComponent } from './books-list/books-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BooksListService } from './books-list/books-list.service';
import { TopBooksComponent } from './top-books/top-books.component';

@NgModule({
  declarations: [BooksListComponent, TopBooksComponent],
  imports: [CommonModule, SharedModule],
  exports: [BooksListComponent, TopBooksComponent],
  providers: [BooksListService],
})
export class HomepageModule {}
