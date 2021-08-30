import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { BooksListComponent } from '../../shared/components/books-list/books-list.component';
import { AddButtonModule } from './../../shared/components/add-button/add-button.module';
import { BooksListService } from '../../shared/components/books-list/books-list.service';
import { TopBooksComponent } from './top-books/top-books.component';
import { GenresListComponent } from './genres-list/genres-list.component';
import { GenresListService } from './genres-list/genres.service';
import { HomepageComponent } from './homepage.component';
import { FavoriteButtonModule } from 'src/app/shared/components/favorite-button/favorite-button.module';
import { TopComponent } from './top/top.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    BooksListComponent,
    TopBooksComponent,
    GenresListComponent,
    HomepageComponent,
    TopComponent,
    DetailsComponent
  ],
  imports: [CommonModule, AddButtonModule, FavoriteButtonModule, MatIconModule ],


  exports: [BooksListComponent, TopBooksComponent, GenresListComponent],
  providers: [BooksListService, GenresListService],
})
export class HomepageModule {}
