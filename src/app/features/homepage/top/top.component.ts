import { Component } from '@angular/core';
import { IBook } from 'src/app/core/interfaces/book.interface';
import { TopService } from './top.service'
import { Observable } from 'rxjs';
import { IAuthor } from './../../../core/interfaces/author.interface';


@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent  {
  topBooks$: Observable<IBook[]>
  topAuthors$: Observable<IAuthor[]>

  topBook = true;

  constructor(private topService: TopService){
    this.topBooks$ = this.topService.getTopBooks()
    this.topAuthors$ = this.topService.getTopAuthors()
  }

  changeBookAuthor(){
    this.topBook = !this.topBook
    console.log(this.topBook)
  }

}
