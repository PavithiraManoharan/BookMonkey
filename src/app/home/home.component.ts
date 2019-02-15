import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bm-home',
  template: `
    <div class="ui main container">
    <h2>Welcome to the BookMonkey App!</h2>
    <bm-search></bm-search>
    <p>You can find books to read in the Bücher section of this App.</p>
    <a routerLink="../books" class="ui red button">
    Buchliste ansehen <i class="right arrow icon"></i>
    </a></div>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
