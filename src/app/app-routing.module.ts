import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from "./app.component";
import {BookOverviewComponent} from "./components/books/overview/overview.component";

const routes: Routes = [
  { path: 'book-overview', component: BookOverviewComponent },
  // { path: '**', component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
