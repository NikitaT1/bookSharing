import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationListComponent  {
  //items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);
 
  items = [1,2,3,4]

}
