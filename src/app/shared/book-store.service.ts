import { Book } from './book';
import { Thumbnail } from './thumbnail';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class BookStoreService {
  books: Book[];
  myValue: string;
  constructor() {
    // This.books is the dependancy.
    // We inject here and then use it in other components
    // To inject primitive types, use @Inject

    this.books = [
      new Book(
        '9783864903571',
        'Angular',
        ['Johannes Hoppe', 'Danny Koppenhagen', 'Ferdinand Malcher', 'Gregor Woiwode'],
        new Date(2017, 3, 1),
        'Grundlagen, fortgeschrittene Techniken und Best Practices mit TypeScript - ab Angular 4, inklusive NativeScript und Redux',
        5,
        [new Thumbnail('https://ng-buch.de/cover2.jpg', 'Buchcover')],
        'Mit Angular setzen Sie auf ein modernes und modulares...',
        0
      ),
      new Book(
        '9783864901546',
        'AngularJS',
        ['Philipp Tarasiewicz', 'Robin Böhm'],
        new Date(2014, 5, 29),
        'Eine praktische Einführung',
        5,
        [new Thumbnail('https://ng-buch.de/cover1.jpg', 'Buchcover')],
        'Dieses Buch führt Sie anhand eines zusammenhängenden Beispielprojekts...',
        0
      )
    ];
   }

   getAll() {
     return this.books;
   }

   getSingle(isbn) {
     return this.books.find(book => book.isbn === isbn);
   }
}
