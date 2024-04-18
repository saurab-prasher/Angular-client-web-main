// blog.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

interface BlogPost {
  id: number;
  title: string;
  summary: string;
  date: string;
}

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private blogPostsUrl =
    'https://nutriserve-server-git-main-saurab-prashers-projects.vercel.app/api/blogPosts'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  getBlogPosts(): Observable<BlogPost[]> {
    return this.http.get<BlogPost[]>(this.blogPostsUrl).pipe(
      catchError((error) => {
        console.error('Error fetching blog posts:', error);
        throw error;
      })
    );
  }
}
