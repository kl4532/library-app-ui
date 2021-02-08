import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from "./app.component";
import {BookOverviewComponent} from "./components/books/overview/overview.component";
import {BookDetailsComponent} from "./components/books/details/details.component";

const routes: Routes = [
  { path: 'book-overview', component: BookOverviewComponent },
  { path: 'details', component: BookDetailsComponent },
  { path: 'author', component: BookDetailsComponent },

  // { path: '**', component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
