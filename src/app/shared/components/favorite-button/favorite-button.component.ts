import { Component, Input, Output, EventEmitter, } from '@angular/core';

@Component({
  selector: 'app-favorite-button',
  templateUrl: './favorite-button.component.html',
  styleUrls: ['./favorite-button.component.scss'],
})
export class FavoriteButtonComponent {
  @Input('isFavorite') isFavorite: boolean = true;
  @Output('change') change = new EventEmitter();

  onClick(){
    this.isFavorite ? this.isFavorite= false : this.isFavorite = true
    this.change.emit({newValue: this.isFavorite})
  }


}
