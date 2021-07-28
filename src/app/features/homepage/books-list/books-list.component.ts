import { Component } from '@angular/core';
import { BooksListService } from './books-list.service';
@Component({
  selector: 'books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss'],
})
export class BooksListComponent {
  books
  buttonContent = {authors:['A - Z', 'Z - A'], rating: ['Max', 'Min']}

  constructor(private bookstListService: BooksListService) {
    this.books = this.bookstListService.getBooks()
  }
}
