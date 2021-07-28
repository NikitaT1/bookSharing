import { NgModule } from '@angular/core';
import { SearchComponent } from './search.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [SearchComponent],
  imports: [CommonModule],
  providers: [],
  exports: [SearchComponent],
})
export class SearchModule {}
