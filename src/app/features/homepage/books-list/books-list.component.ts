import { Component } from '@angular/core';
import { BooksListService } from './books-list.service';
@Component({
  selector: 'books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss'],
})
export class BooksListComponent {
  books = [' The Lord of the Rings', 'The Hitchhiker’s Guide to the Galaxy', 'Dune'];
  genres
  author 
  rating = ['1', '2', '3']; 
  
  
  constructor(private bookstListService: BooksListService) {
    this.author = this.bookstListService.getAuthors()
    this.genres = this.bookstListService.getGenres()
  }
}
