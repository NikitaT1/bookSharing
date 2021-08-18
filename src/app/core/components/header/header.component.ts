import { Component, ChangeDetectionStrategy, } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  notifications = 0;
  isNotificationShowed = false
  items = ['message1','message2','message3','message4']
  choosePoint(){
    console.log('bum!')
  }
  markAsRead(){
    
  }

  showNotification(){
    this.isNotificationShowed = !this.isNotificationShowed
  }
}
 