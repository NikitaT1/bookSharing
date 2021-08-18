import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon'
import { NotificationListComponent } from './notification-list.component';

@NgModule({
  declarations: [
    NotificationListComponent
  ],
  imports: [CommonModule, MatIconModule],
  
providers: [],
  exports: [
    NotificationListComponent
  ],
})  
export class NotificationListModule {}
