import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';

interface BlogPost {
  id: number;
  title: string;
  summary: string;
  date: string;
}

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})

export class BlogPageComponent implements OnInit {
  blogPosts: BlogPost[] = [];

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.blogService.getBlogPosts()
      .subscribe(posts => {
        this.blogPosts = posts;
      });
  }
}
