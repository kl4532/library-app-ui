import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {BooksService} from "../../../services/books.service";

@Component({
  selector: 'book-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  bookDetails: any;

  constructor( private route: ActivatedRoute,
               private router: Router,
               private bookService: BooksService) { }

  ngOnInit(): void {
    const bookId = this.route.snapshot.paramMap.get('id') || '';
    this.bookService.getBookDetails(bookId).subscribe(details => this.bookDetails = details);
  }



}
