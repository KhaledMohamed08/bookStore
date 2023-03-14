import { Component, Output } from '@angular/core';
import { BooksDataService } from 'src/app/services/books-data.service';
import { Books } from 'src/app/viewModels/books';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  book:Books[]=[]
  constructor(booksData:BooksDataService){
    this.book = booksData.books
  }
}
