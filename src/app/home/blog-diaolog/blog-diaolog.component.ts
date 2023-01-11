import { Component, inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-blog-diaolog',
  templateUrl: './blog-diaolog.component.html',
  styleUrls: ['./blog-diaolog.component.scss']
})
export class BlogDiaologComponent {
  isUpdate: boolean = false;
  private data: any = inject(MAT_DIALOG_DATA);
  private dialogRef = inject(MatDialogRef<BlogDiaologComponent>)
  constructor() {
    if (this.data.isUpdate) {
      this.isUpdate = true;

    } else {

    }
  }
  close() {
    this.dialogRef.close();
  }


}
