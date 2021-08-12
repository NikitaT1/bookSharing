import { ElementRef } from '@angular/core';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { fromEvent, merge, Observable } from 'rxjs';
import { mapTo } from 'rxjs/operators';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements AfterViewInit{

  @ViewChild('searchInput') searchInput!: ElementRef;

  active$!: Observable<boolean>;

  ngAfterViewInit (): void {
    this.active$ = merge(
      fromEvent(this.searchInput.nativeElement, 'focus').pipe(mapTo(true)),
      fromEvent(this.searchInput.nativeElement, 'blur').pipe(mapTo(false)),
    );
  }


}
