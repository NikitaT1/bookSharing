import { Component, OnInit, Input } from '@angular/core';
import {  FormControl } from '@angular/forms';
import { fromEvent, of } from 'rxjs'

@Component({
  selector: 'app-typeahead',
  templateUrl: './typeahead.component.html',
  styleUrls: ['./typeahead.component.scss'],
})
export class TypeaheadComponent implements OnInit {

  @Input() ctrl!: FormControl;
  @Input() placeholder?: string;
  @Input() label?: string;

  options = [1,2,3,4,5]


  ngOnInit(): void {}

  
}
