import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss'],
})
export class BooksListComponent {
  title = 'Title';
  books = ['book1', 'book2', 'book3', 'book4'];
  authors = ['author1', 'author2', 'author3', 'author4'];
  genres = ['genre1', 'genre2', 'genre3', 'genre4'];
  rating = [1, 2, 3, 4];
}
