import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-book-dialog',
  templateUrl: './add-book-dialog.component.html',
  styleUrls: ['./add-book-dialog.component.scss'],
})
export class AddBookDialogComponent {

  formGroup: FormGroup;

  constructor(private dialogRef: MatDialogRef<AddBookDialogComponent>) {
    this.formGroup = new FormGroup({
      title: new FormControl('', Validators.required),
      author: new FormControl('', Validators.required),
      description: new FormControl(''),
    });
  }

  getCtrl(name: string): FormControl{
    return this.formGroup.get(name) as FormControl
  }

  close(): void {
    this.dialogRef.close();
  }
  submit(): void {
    console.log('submited');
    this.dialogRef.close();
  }
}
