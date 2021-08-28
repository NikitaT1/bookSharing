import { IBook } from '../../../core/interfaces/book.interface';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { IAuthor } from './../../../core/interfaces/author.interface';


const topBooks: IBook[] = [
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Johan_Huizinga%3B_Autumntide_of_the_Middle_Ages._Book_cover.jpg/220px-Johan_Huizinga%3B_Autumntide_of_the_Middle_Ages._Book_cover.jpg',
    name: 'Autumn of Middle Ages',
    author: 'J.Huizinga',
    genre: 'Non-fiction',
    rating: 10,
    isFavorite: true,
    id: 1
  },
  {
    img: 'https://images-na.ssl-images-amazon.com/images/I/51sHFNj+6CL._SX304_BO1,204,203,200_.jpg',
    name: 'Heimskringla',
    author: 'Snorri Sturluson',
    genre: 'Non-fiction',
    rating: 8,
    isFavorite: true,
    id: 2
  },
  {
    img: 'https://images.gr-assets.com/books/1434908555l/234225.jpg',
    name: 'Dune',
    author: 'Frank Herbert',
    genre: 'Fiction',
    rating: 7,
    isFavorite: false,
    id: 3
  },
];

const topAuthors: IAuthor[] = [
  {
    img: '',
    name: 'J.Huizinga',
    id: 1
  },
  {
    img: '',
    name: 'J.R.Martin',
    id: 2
  },
]

@Injectable({providedIn: 'root'})
export class TopService {

  constructor(private _http: HttpClient){}


  getTopBooks(): Observable<IBook[]> {
    return of(topBooks);
  }

  getTopAuthors(): Observable<IAuthor[]>{
    return of(topAuthors)
  }

  
} 
