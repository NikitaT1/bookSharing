import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './features/homepage/homepage.component';
import { HomepageModule } from './features/homepage/homepage.module';
import { BooksListComponent } from './shared/components/books-list/books-list.component';

const routes: Routes = [
  {path: '', component: HomepageComponent, pathMatch: 'full'},
  {path: 'books-list', component: BooksListComponent},
  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HomepageModule],


  exports: [RouterModule],
})
export class AppRoutingModule {}
