import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'bm-home',
  template: `
    <div class="ui main container grid">
    <div class="sixteen wide column">
    <h2>Welcome to the BookMonkey App!</h2>
    <p>You can find books to read in the Bücher section of this App.</p></div>
    <div class="eight wide column"><a routerLink="../books" class="ui red button">
    Buchliste ansehen <i class="right arrow icon"></i>
    </a></div>
    <bm-search (bookSelected)="bookSelected($event)" class="eight wide column"></bm-search>
    </div>
  `,
  styles: []
})
export class HomeComponent {

  constructor(private router: Router, private route: ActivatedRoute) { }

  bookSelected(book: Book) {
    this.router.navigate(['../books', book.isbn], { relativeTo: this.route });
  }

}
