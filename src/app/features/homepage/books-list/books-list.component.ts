import { Component } from '@angular/core';
import { IBook } from 'src/app/core/interfaces/book.interface';
import { BooksListService } from './books-list.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss'],
})
export class BooksListComponent {
  books$: Observable<IBook[]>
  buttonContent = {authors:['A - Z', 'Z - A'], rating: ['Max', 'Min']}

  constructor(private bookstListService: BooksListService) {
    this.books$ = this.bookstListService.getBooks()
  }



  // onFavoriteChanged(id: number){
  //   this.bookstListService.changeFavorite(id)
  // }
}
