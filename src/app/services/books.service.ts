import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormGroup} from "@angular/forms";
import { map } from 'rxjs/operators';

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

  getBookDetails(id: string) {
    return this.http.get(`server/books/${id}`);
  }

  getBooksByCriteria(searchData: any) {
    return this.http.get('server/books').pipe(map((books: any) => {

      // filter for Title or Author against input phrase
      let filtered = [];
      if(searchData.criteria === 'Title'){
        filtered = books.filter((book: any) => book.title.toLowerCase().includes(searchData.inputSearch.toLowerCase()));
      } else {
        filtered = books.filter((book: any) => {
          const author =  book.author_first_name + ' ' + book.author_last_name;
          if(author.toLowerCase().includes(searchData.inputSearch.toLowerCase())){
              return true;
          };
          return false;

        })
      };

      // filter against selected Categories
      filtered = filtered.filter((book: any) => {
        for (let category of searchData.categories) {
          if(book.category.includes(category)){
            return true;
          }
        }
        return false;
      })

      return filtered;
    }))
  }
}
