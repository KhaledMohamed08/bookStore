import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { BodyComponent } from './components/body/body.component';
import { BooksComponent } from './components/books/books.component';
import { LoginComponent } from './components/login/login.component';
import { BookPageComponent } from './components/book-page/book-page.component';
import { RegisterComponent } from './components/register/register.component';
import { HistoryComponent } from './components/history/history.component';
import { FormsModule } from '@angular/forms';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { CatigoryListComponent } from './components/catigory-list/catigory-list.component';
import { CartComponent } from './components/cart/cart.component';
import { UserDataComponent } from './components/user-data/user-data.component';
import { MyBooksComponent } from './components/my-books/my-books.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    BodyComponent,
    BooksComponent,
    LoginComponent,
    BookPageComponent,
    RegisterComponent,
    HistoryComponent,
    JumbotronComponent,
    CatigoryListComponent,
    CartComponent,
    UserDataComponent,
    MyBooksComponent,
    AddBookComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
