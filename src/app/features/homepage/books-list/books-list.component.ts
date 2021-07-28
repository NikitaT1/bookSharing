import { Component } from '@angular/core';
import { BooksListService } from './books-list.service';
@Component({
  selector: 'books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss'],
})
export class BooksListComponent {
  books

  constructor(private bookstListService: BooksListService) {
    this.books = this.bookstListService.getBooks()
  }
}
