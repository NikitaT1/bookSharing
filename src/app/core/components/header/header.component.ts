import { Component, ChangeDetectionStrategy, } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddBookDialogComponent } from './add-book-dialog/add-book-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  notifications = 0;
  isNotificationShowed = false
  items = ['message111111111111111111 111111111111111111 11111111111111111111 111111111 11111111111111111111111',
    'message2','message3','message4']

  constructor(private dialog: MatDialog){}

  choosePoint(): void {
    console.log('bum!')
  }
  markAsRead(): void {
    console.log('mark as read')
  }

  addBook(): void {
    this.dialog.open(AddBookDialogComponent, { width: '660px' })
  }

  

  showNotification(): void {
    this.isNotificationShowed = !this.isNotificationShowed
  }
}
