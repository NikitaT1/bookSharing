import { NgModule } from '@angular/core';
import { SearchComponent } from './search.component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [SearchComponent],
  imports: [CommonModule, MatIconModule],
  providers: [], 
  exports: [SearchComponent],
})
export class SearchModule {}
