import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/models/news.model';
import { NewsBlogService } from 'src/app/services/news-blog.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-news-blog',
  templateUrl: './news-blog.component.html',
  styleUrls: ['./news-blog.component.css'],
})
export class NewsBlogComponent implements OnInit {
  constructor(private newBlog: NewsBlogService) {}
  blogs: Observable<News[]>; //same type as one we created in service

  ngOnInit(): void {
    this.blogs = this.newBlog.currentNewsBlogs;
  }

  onCreateBlog(headline: string, post: string) {
    this.newBlog.AddBlog(headline, post);
  }

  onDelete(id: string | undefined) {
    this.newBlog.DeleteBlog(id!);
  }

  onClick(value: any) {
    alert(value);
  }
}
