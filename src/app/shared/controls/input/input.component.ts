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
  selector: 'app-input', 
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements AfterViewInit, OnDestroy {
  @Input() ctrl!: FormControl;
  @Input() placeholder!: string;
  @Input() label?: string;
  @ViewChild('description') description: ElementRef;

  options = [1, 2, 3, 4, 5];
  options$ = new Subject<number[]>();
  subscribtion: Subscription;

  ngAfterViewInit(): void {
    this.subscribtion = fromEvent(this.description.nativeElement, 'keyup')
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
