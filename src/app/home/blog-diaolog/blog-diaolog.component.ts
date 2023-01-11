import { Component, inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-blog-diaolog',
  templateUrl: './blog-diaolog.component.html',
  styleUrls: ['./blog-diaolog.component.scss']
})
export class BlogDiaologComponent {
  isUpdate: boolean = false;
  imageUrl: string = "";
  title: string = "";
  body: string = "";
  private data: any = inject(MAT_DIALOG_DATA);
  private dialogRef = inject(MatDialogRef<BlogDiaologComponent>)
  constructor() {
    if (this.data.isUpdate) {
      this.isUpdate = true;

    } else {
      this.imageUrl = this.data.blog.imageId.toString();
      this.title = this.data.blog.title;
      this.body = this.data.blog.body;
    }
  }
  close() {
    this.dialogRef.close();
  }


}
