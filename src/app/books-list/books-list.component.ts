import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';

@Component({
  selector: 'books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent  {
  isActive = true
  books

  constructor(service: BooksService) {
    this.books = service.getBooks()
   }
  
  

}
