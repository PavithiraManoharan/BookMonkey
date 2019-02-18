import { BookStoreService } from './../shared/book-store.service';
import { Book } from './../shared/book';
import { debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'bm-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  isLoading = false;
  foundBooks: Book[] = [];

  @Output() bookSelected = new EventEmitter<Book>();
  constructor(private bs: BookStoreService) {}

  keyup = new EventEmitter<string>();

  ngOnInit() {
    this.keyup.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      tap(() => this.isLoading = true),
      switchMap(searchTerm => this.bs.getAllSearch(searchTerm)),
      tap(() => this.isLoading = false)
      )
      .subscribe(books => this.foundBooks = books);
  }
}
