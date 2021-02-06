import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  searchData: any;

  constructor(private http: HttpClient) { }

  setSearchData(data: FormGroup) {
    this.searchData = data;
  }

  getSearchData() {
    return this.searchData;
  }

  getAllBooks() {
    return this.http.get('server/books');
  }

  getBooksByCriteria(criteria: String[]) {
    return this.http.get('server/books').pipe(
      //map through criteria
    );
  }



}
