import { IBook } from './../../../core/interfaces/book.interface';
export class BooksListService {

  books: IBook[] = [
    {
      img: 'https://images.gr-assets.com/books/1411114164l/33.jpg',
      name: 'The Lord of the Rings',
      author: 'J.R.R.Tolkien',
      genre: 'Fantacy',
      rating: 10,
      isFavorite: true,
      id: 1
    },
    {
      img: 'https://images.gr-assets.com/books/1388282444l/386162.jpg',
      name: 'The Hitchhiker’s Guide to the Galaxy',
      author: 'Douglas Adams',
      genre: 'Fiction',
      rating: 8,
      isFavorite: false,
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

  getTitles(): string[] {
    return ['genre1', 'genre2', 'genre3'];
  }

  getGenres(): string[] {
    return ['genre1', 'genre2', 'genre3'];
  }

  getAuthors(): string[] {
    return ['J.R.R. Tolkien', 'Douglas Adams', 'Frank Herbert'];
  }

  getBooks(): IBook[] {
    return this.books;
  }

  changeFavorite(id: number) {
    const index = this.books.findIndex( f => f.id === id)
    if(index > -1 )  {
     this.books[index].isFavorite = !this.books[index].isFavorite
    }
  }
}
