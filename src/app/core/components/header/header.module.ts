import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { SearchModule } from './../../../shared/components/search/search.module';
import { AvatarModule } from 'src/app/shared/components/avatar/avatar.module';
import { AddBookDialogComponent } from './add-book-dialog/add-book-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { TypeaheadModule } from './../../../shared/controls/typeahead/typeahead.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeaderComponent, AddBookDialogComponent],
  imports: [
 
  SearchModule,
    CommonModule,
    MatIconModule,
    MatMenuModule,
    MatBadgeModule,
    AvatarModule,
    MatDialogModule,
    TypeaheadModule,
    ReactiveFormsModule
  
  ],

  providers: [],
  exports: [HeaderComponent],
})
export class HeaderModule {}
