import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Book} from "../../models/book";
import {SelectButton} from "corny-components";
import {BooksService} from "../../services/books.service";
import {Router} from "@angular/router";

@Component({
  selector: 'search-component',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {


  searchForm: FormGroup = new FormGroup({});
  categories: SelectButton[] = [];
  books: Book[] = [];

  constructor(
    private fb: FormBuilder,
    private booksService: BooksService,
    private router: Router) {}

  ngOnInit() {
    this.searchForm = this.fb.group({
      inputSearch: ['', [Validators.required]],
      criteria: ['Title', [Validators.required]],
      categories: new FormControl([]),
    });

    this.categories = [
      {name: 'Adventure', selected: false},
      {name: 'Fantasy', selected: false},
      {name: 'Education', selected: false},
      {name: 'Crime', selected: false},
      {name: 'IT', selected: false}
    ];
  }
  onSearch() {
    this.booksService.setSearchData(this.searchForm);

    // this.router.navigate(['/book-overview']);
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
      this.router.navigate(['book-overview'])
    );
  }
}
