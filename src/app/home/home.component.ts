import { Component, inject, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  blogData: Array<any> = [];
  pageSize = 8;
  page = 13;

  private blogService = inject(BlogService);

  ngOnInit(): void {
    this.blogService.getPosts().subscribe((res) => { this.blogData = res; })
  }

}
