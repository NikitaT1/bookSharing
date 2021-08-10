import { Component, Input, OnInit } from '@angular/core';
import { GenresListService } from './genres.service';

@Component({
  selector: 'app-genres-list',
  templateUrl: './genres-list.component.html',
  styleUrls: ['./genres-list.component.scss'],
})
export class GenresListComponent {
  genres;

  constructor(private genresListService: GenresListService) {
    this.genres = this.genresListService.getGenres();
  }
}
