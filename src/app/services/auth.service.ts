import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private serverUrl =
    'https://nutriserve-server-git-main-saurab-prashers-projects.vercel.app';
  private loggedInUserSubject: BehaviorSubject<any>;
  public loggedInUser: Observable<any>;
  private router!: Router;

  constructor(private http: HttpClient) {
    const user = localStorage.getItem('loggedInUser');
    this.loggedInUserSubject = new BehaviorSubject<any>(
      user ? JSON.parse(user) : null
    );
    this.loggedInUser = this.loggedInUserSubject.asObservable();
  }
  public get loggedInUserValue(): any {
    return this.loggedInUserSubject.value;
  }

  login(email: string, password: string): Observable<any> {
    return this.http
      .post<any>(`${this.serverUrl}/users/login`, { email, password })
      .pipe(
        tap((user) => {
          localStorage.setItem('loggedInUser', JSON.stringify(user));
          this.loggedInUserSubject.next(user);
        })
      );
  }

  logout() {
    // You may want to call an API to invalidate the session on the backend as well
    return this.http.post<any>(`${this.serverUrl}/users/logout`, {}).pipe(
      tap(() => {
        localStorage.removeItem('loggedInUser');
        this.loggedInUserSubject.next(null);
      })
    );
  }

  register(
    email: string,
    password: string,
    firstname: string,
    lastname: string
  ): Observable<any> {
    return this.http
      .post<any>(
        `${this.serverUrl}/users/register`,
        { email, password, firstname, lastname },
        {
          headers: { 'Content-Type': 'application/json' },
        }
      )
      .pipe(
        tap((data) => {
          if (data && data.msg === 'SUCCESS') {
            localStorage.setItem('loggedInUser', JSON.stringify(data.user));
            this.loggedInUserSubject.next(data.user);
            this.router.navigate(['/plans']);
          }
        })
      );
  }
}
