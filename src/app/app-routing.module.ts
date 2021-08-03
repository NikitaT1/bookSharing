import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { BooksListComponent } from './features/homepage/books-list/books-list.component';
import { HomepageComponent } from './features/homepage/homepage.component';
import { HomepageModule } from './features/homepage/homepage.module';

const routes: Routes = [
  {path: '', component: HomepageComponent, pathMatch: 'full'},
  // {path: 'top', component: BooksListComponent, children: []},
  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HomepageModule],

  exports: [RouterModule],
})
export class AppRoutingModule {}
