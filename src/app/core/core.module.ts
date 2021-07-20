import { NgModule } from '@angular/core';
import { BooksListComponent } from '../features/homepage/books-list/books-list.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    BooksListComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [],
  providers: [],
  exports: [
    BooksListComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
  ],
})
export class CoreModule {}
