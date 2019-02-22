import { BookFactory } from './book-factory';
import { Book } from './book';
import { BookRaw } from './book-raw';
import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {
  private api = 'http://localhost:3000';
  private headers: Headers = new Headers();

  constructor(private http: HttpClient) {}
  getAll(): Observable<Array<Book>> {
    return this.http
      .get<BookRaw[]>(`${this.api}/books`)
      .pipe(
        retry(3),
        map(rawBooks => rawBooks
          .map(rawBook => BookFactory.fromObject(rawBook)),
        ),
        catchError(this.errorHandler)
      );
  }

  getAllSearch(searchTerm: string): Observable<Array<Book>> {
    return this.http
      .get<BookRaw[]>(`${this.api}/books/search/${searchTerm}`)
      .pipe(
        retry(3),
        map(rawBooks => rawBooks
          .map(rawBook => BookFactory.fromObject(rawBook))
      ),
      catchError(this.errorHandler)
      );

  }

  getSingle(isbn: string): Observable<Book> {
    return this.http
      .get<BookRaw>(`${this.api}/books/${isbn}`)
      .pipe(
        retry(3),
        map(rawBook => BookFactory.fromObject(rawBook)),
        catchError(this.errorHandler)
      );
  }

  create(book: Book): Observable<any> {
    return this.http
      .post(`${this.api}/books`, book, { responseType: 'text' })
      .pipe(
        catchError(this.errorHandler)
      );
  }

  update(book: Book): Observable<any> {
    return this.http
      .put(`${this.api}/books/${book.isbn}`, book, { responseType: 'text' })
      .pipe(
        catchError(this.errorHandler)
      );
  }

  remove(isbn: string): Observable<any> {
    return this.http
      .delete(`${this.api}/books/${isbn}`, { responseType: 'text' })
      .pipe(
        catchError(this.errorHandler)
      );
  }

  private errorHandler(error: Error | any): Observable<any> {
    return throwError(error);
  }
}
