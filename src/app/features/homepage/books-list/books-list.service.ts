

export class BooksListService {
    getTitles() {
        return ["genre1", "genre2", "genre3"]
    }

    getGenres() {
        return ["genre1", "genre2", "genre3"]
    }

    getAuthors(){
        return ['J.R.R. Tolkien', 'Douglas Adams', 'Frank Herbert']
    }

    getBooks(){
        return [
            {img: "https://images.gr-assets.com/books/1411114164l/33.jpg", name: 'The Lord of the Rings', author: 'J.R.R.Tolkien', genre: 'Fantacy', rating: 10}, 
            {img: "https://images.gr-assets.com/books/1388282444l/386162.jpg", name: 'The Hitchhiker’s Guide to the Galaxy', author: 'Douglas Adams', genre: 'Fiction', rating: 8},
            {img: "https://images.gr-assets.com/books/1434908555l/234225.jpg", name: 'Dune', author: 'Frank Herbert', genre: 'Fiction', rating: 7}
            ]
    }
}