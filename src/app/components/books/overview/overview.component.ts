import {Component, Input, OnInit} from '@angular/core';
import {BooksService} from "../../../services/books.service";
import {FormGroup} from "@angular/forms";
import {Book} from "../../../models/book";

@Component({
  selector: 'book-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class BookOverviewComponent implements OnInit {

  searchDataForm: FormGroup;
  books: Book[];

  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    this.books = [];
    this.searchDataForm = this.booksService.getSearchData()

    this.displaySearchParameters();
  }

  displaySearchParameters() {
    this.booksService.getAllBooks().subscribe((books: any) => {
      this.books = books;
      console.log('books', books);
      console.log('form', this.searchDataForm.value);
    })
  }

}
