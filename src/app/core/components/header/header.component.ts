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
  items = [1,2,3,4]
  choosePoint(){
    console.log('bum!')
  }

  showNotification(){
    this.isNotificationShowed = !this.isNotificationShowed
  }
}
 