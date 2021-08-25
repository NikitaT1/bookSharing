import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { fromEvent, Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, mapTo } from 'rxjs/operators';
 
@Component({
  selector: 'app-typeahead',
  templateUrl: './typeahead.component.html',
  styleUrls: ['./typeahead.component.scss'],
})
export class TypeaheadComponent implements AfterViewInit, OnDestroy {
  @Input() ctrl!: FormControl;
  @Input() placeholder!: string;
  @Input() label?: string;
  @ViewChild('input') input: ElementRef;

  options = [1, 2, 3, 4, 5];
  options$ = new Subject<number[]>();
  subscribtion: Subscription;

  ngAfterViewInit(): void {
    this.subscribtion = fromEvent(this.input.nativeElement, 'keyup')
      .pipe(
        debounceTime(200),
        map((e: any) => e.target.value),
        distinctUntilChanged(),
        mapTo(this.options)
      )
      .subscribe(this.options$);
  }

  ngOnDestroy() {
    this.subscribtion.unsubscribe();
  }
}
