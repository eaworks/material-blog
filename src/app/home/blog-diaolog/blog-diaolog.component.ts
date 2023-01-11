import { Component, inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-blog-diaolog',
  templateUrl: './blog-diaolog.component.html',
  styleUrls: ['./blog-diaolog.component.scss']
})
export class BlogDiaologComponent implements OnInit {
  isUpdate: boolean = false;
  imageUrl: string = "";
  title: string = "";
  body: string = "";
  commentData: any;
  private commentService = inject(CommentService);
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
  ngOnInit(): void {
    this.commentService.getComments().subscribe((res) => {
      this.commentData = res.filter((x: { postId: any }) => x.postId == this.data.blog.id)
    })
  }
  close() {
    this.dialogRef.close();
  }


}
