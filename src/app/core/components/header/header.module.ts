import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule} from '@angular/material/menu';
import {MatBadgeModule} from '@angular/material/badge'
import { SearchModule } from './../../../shared/components/search/search.module';
import { AvatarModule } from 'src/app/shared/components/avatar/avatar.module';
import { NotificationListModule } from './../../../shared/components/notification-list/notification-list.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [SearchModule, CommonModule, MatIconModule, MatMenuModule, MatBadgeModule, AvatarModule, NotificationListModule],

providers: [],
  exports: [HeaderComponent],
})
export class HeaderModule {}
