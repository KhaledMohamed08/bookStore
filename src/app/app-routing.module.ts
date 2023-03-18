import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './components/add-book/add-book.component';
import { BodyComponent } from './components/body/body.component';
import { BookPageComponent } from './components/book-page/book-page.component';
import { CartComponent } from './components/cart/cart.component';
import { HistoryComponent } from './components/history/history.component';
import { LoginComponent } from './components/login/login.component';
import { MyBooksComponent } from './components/my-books/my-books.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RegisterComponent } from './components/register/register.component';
import { UserDataComponent } from './components/user-data/user-data.component';

const routes: Routes = [
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'home', component:BodyComponent},
  {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path:'books/:id', component:BookPageComponent},
  {path:'History', component:HistoryComponent},
  {path: 'cart', component:CartComponent},
  {path: 'data', component:UserDataComponent},
  {path: 'myBooks', component:MyBooksComponent},
  {path: 'addBook', component:AddBookComponent},
  {path: '**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
