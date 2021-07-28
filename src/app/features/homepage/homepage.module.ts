import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksListComponent } from './books-list/books-list.component';
import { AddButtonModule } from './../../shared/components/add-button/add-button.module';
import { BooksListService } from './books-list/books-list.service';
import { TopBooksComponent } from './top-books/top-books.component';
import { GenresListComponent } from './genres-list/genres-list.component';

@NgModule({
  declarations: [BooksListComponent, TopBooksComponent, GenresListComponent],
  imports: [CommonModule, AddButtonModule],
  
exports: [BooksListComponent, TopBooksComponent, GenresListComponent],
  providers: [BooksListService],
})
export class HomepageModule {}
