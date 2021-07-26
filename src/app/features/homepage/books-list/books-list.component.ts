import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss'],
})
export class BooksListComponent {
  title = 'Title';
  books = [' The Lord of the Rings', 'The Hitchhiker’s Guide to the Galaxy', 'Dune'];
  genres = ['genre1', 'genre2', 'genre3'];
  author = ['J.R.R. Tolkien', 'Douglas Adams', 'Frank Herbert'];
  rating = ['1', '2', '3']; 
}
