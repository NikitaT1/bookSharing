import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ProfileState } from './states/profile.state';
import { Observable } from 'rxjs';
import { Select } from '@ngxs/store';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent implements OnInit {
  @Select(ProfileState.details) details$: Observable<any>;
  @Select(ProfileState.name) text$: Observable<any>;

  newProfileForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.buildForm();

  }

  onSubmit() {
  }

  ngOnInit(): void {
  }

  buildForm(): void {
    this.newProfileForm = this.formBuilder.group({
      text: new FormControl(null)
    });
  }

}
