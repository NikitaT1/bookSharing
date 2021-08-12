import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule} from '@angular/material/menu';
import {MatBadgeModule} from '@angular/material/badge'
import { SearchModule } from './../../../shared/components/search/search.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [SearchModule, CommonModule, MatIconModule, MatMenuModule, MatBadgeModule],
  providers: [],
  exports: [HeaderComponent],
})
export class HeaderModule {}
