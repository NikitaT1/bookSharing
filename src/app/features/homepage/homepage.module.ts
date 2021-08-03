import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksListComponent } from './books-list/books-list.component';
import { AddButtonModule } from './../../shared/components/add-button/add-button.module';
import { BooksListService } from './books-list/books-list.service';
import { TopBooksComponent } from './top-books/top-books.component';
import { GenresListComponent } from './genres-list/genres-list.component';
import { GenresListService } from './genres-list/genres.service';
import { HomepageComponent } from './homepage.component';
import { BooksSliderModule } from './../../shared/components/books-slider/books-slider.module';
import { FavoriteButtonModule } from 'src/app/shared/components/favorite-button/favorite-button.module';


@NgModule({
  declarations: [BooksListComponent, TopBooksComponent, GenresListComponent, HomepageComponent ],
  imports: [CommonModule, AddButtonModule, BooksSliderModule, FavoriteButtonModule],



exports: [BooksListComponent, TopBooksComponent, GenresListComponent],
  providers: [BooksListService, GenresListService],
})
export class HomepageModule {}
