import {Component, OnInit} from '@angular/core';

import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import {Book} from "./models/book";
import {BooksService} from "./services/books.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  searchForm: FormGroup = new FormGroup({});
  categories: String[] = [];
  books: Book[] = [];

  constructor(private fb: FormBuilder, private booksService: BooksService) {}

  ngOnInit() {
    this.searchForm = this.fb.group({
      inputSearch: ['', [Validators.required]],
      criteria: ['Title', [Validators.required]],
      category: ''
    });

    this.categories = ['Adventure', 'Education', 'Crime'];
  }


  displaySearchParameters() {
    console.log(this.searchForm.value);
    this.booksService.getAllBooks().subscribe((books: any) => {
      this.books = books;
      console.log(books);
    })

  }


}
